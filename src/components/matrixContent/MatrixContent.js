import React from 'react';
import { View, Dimensions, StyleSheet, Platform } from 'react-native';
import { observer } from 'mobx-react';
import { computed, observable, action } from 'mobx';
import Animated from 'react-native-reanimated';
import BacteriumLabelsContainer from '../bacteriumLabelsContainer/BacteriumLabelsContainer';
import AntibioticLabelsContainer from '../antibioticLabelsContainer/AntibioticLabelsContainer';
import Resistance from '../resistance/Resistance';
import SubstanceClassDivider from '../substanceClassDivider/SubstanceClassDivider';
import log from '../../helpers/log';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
log('Dimensions:', Dimensions.get('window'));
log('Screen dimensions:', Dimensions.get('screen'));

const { max, min, divide } = Animated;

@observer
export default class MatrixContent extends React.Component {

    width = Math.max(windowWidth, 1200);

    contentElement = React.createRef();

    /**
     * Number of resistances that were successfully rendered. Hide loading screen after all of them
     * were rendered
     */
    @observable renderedResistances = 0;

    /**
     * Cap zoom for labels so that they don't get too big (and take up too much space) or become
     * unreadably small
     */
    labelZoomCaps = {
        max: 1.2,
        min: 0.8,
    }

    constructor(...props) {
        super(...props);
        this.setupAnimatedProperties();
    }

    /**
     * We must update animated props whenever content renders; if we don't, it uses old values
     * that were set initially; TODO: use setValue as soon as it's available, convert them to
     * regular class props
     */
    setupAnimatedProperties() {

        /**
         * We want to cap zooming on labels so that they don't get too big (the resistance dots may
         * be zoomed in further)
         */
        this.cappedLabelZoom = min(
            this.labelZoomCaps.max,
            max(
                this.labelZoomCaps.min,
                this.props.animatedZoom,
            ),
        );

        /**
         * When the zoom becomes capped (see cappedLabelZoom), we need to extend the spacing
         * between bact and ab labels. additionalLabelSpacingIncrease holds the additional spacing
         * needed (in %)
         */
        this.additionalLabelSpacingIncrease = divide(
            this.props.animatedZoom,
            this.cappedLabelZoom,
        );

    }


    componentDidMount() {
        // Store dimensions on matrixView so that radius can be calculated
        this.props.matrix.setDimensions({
            // Resistance cirlces/fonts for labels should not be too small
            width: this.width,
            height: windowHeight,
        });
        log('default radius is %o', this.props.matrix.defaultRadius);
    }

    /**
     * Fucking fuck: Android only fires onLayout when it *changes* for content (not for container
     * though) but not when it's initialized. We have to get the dimensions somehow to pass them
     * to PinchPan
     */
    /* componentDidUpdate() {
        if (Platform.OS === 'iOS') return;
        if (this.contentElement.current) {
            this.contentElement.current.measure((dimensions) => {
                console.log('measured', dimensions);
                this.props.handleContentLayout(dimensions);
            });
            console.log('measure now', this.contentElement.current.measure());
        }
    } */


    @computed get halfSpace() {
        return this.props.matrix.spaceBetweenGroups / 2;
    }

    @computed get labelOpacity() {
        const opacity = this.props.matrix.defaultRadius ? 1 : 0;
        return { opacity };
    }

    /**
     * Android has no overflow: visible. Height of bacteria label container must correspond to the
     * height of all labels or labels won't be visible.
     */
    @computed get visibleBacteriaHeight() {
        if (!this.props.matrix.defaultRadius) return 0;
        const height = (this.props.matrix.defaultRadius * 2 + this.props.matrix.space) *
            this.props.matrix.sortedVisibleBacteria.length;
        log('Matrix: Height of visible bacteria is', height);
        return height;
    }

    /**
     * Height of all visible bacteria; needed for Android that has no overflow: visible
     */
    @computed get visibleAntibioticsWidth() {
        if (!this.props.matrix.defaultRadius) return 0;
        const visibleAntibiotics = this.props.matrix.sortedAntibiotics.filter(antibiotic =>
            antibiotic.visible);
        const width =
            (
                this.props.matrix.defaultRadius * 2 +
                this.props.matrix.space
            ) * visibleAntibiotics.length +
            // Every substance class gets a line of width 1 and 2x space (TODO: only count the
            // classes that DO have a divider)
            this.props.matrix.substanceClasses.length * this.props.matrix.space * 2;
        log('Matrix: Width of visible antibiotics is', width);
        return width;
    }

    /**
     * Callback that is invoked from every resistance that has finished rendering.
     */
    @action resistanceRendered = () => {
        this.renderedResistances += 1;
        if (this.renderedResistances === this.props.matrix.resistances.length) {
            log('Matrix: Rendering is done');
            this.props.setRenderingDone(true);
        }
    }

    /**
     * Helper function that returns the key of a resistance (needed to iterate).
     */
    getResistanceKey(resistance) {
        return `${resistance.resistance.antibiotic.id}/${resistance.resistance.bacterium.id}`;
    }

    @computed get antibioticLabelRowHeight() {
        // «Zoom into» bar with bact labels by max label zoom factor so that we don't have to
        // transform when zooming in
        // Add half a space to give it a small border so that resistances disappear behind labels
        // before they touch them (when panning)
        return this.props.matrix.defaultRadius ?
            this.labelZoomCaps.max * this.props.matrix.antibioticLabelRowHeight + this.halfSpace :
            'auto';
    }

    /**
     * Creates an object that can be consumed by a react native's transform style property
     */
    getPanPinchTransformation(dimensions = ['x', 'y']) {
        const transform = [];
        if (dimensions.includes('x')) transform.push({ translateX: this.props.animatedLeft });
        if (dimensions.includes('y')) transform.push({ translateY: this.props.animatedTop });
        transform.push({ scale: this.props.animatedZoom });
        // log('MatrixContent: Transform for dimensions', dimensions, 'is', transform);
        return { transform };
    }


    /**
     * Returns the width of the whole bacteria label column
     */
    @computed get bacteriumLabelColumnWidth() {
        // «Zoom into» bar with bact labels by max label zoom factor so that we don't have to
        // transform when zooming in
        // Add half a space to give it a small border so that resistances disappear behind labels
        // before they touch them (when panning)
        return this.props.matrix.defaultRadius ?
            this.labelZoomCaps.max * this.props.matrix.bacteriumLabelColumnWidth + this.halfSpace :
            'auto';
    }



    render() {

        log('MatrixContent: Render');
        this.setupAnimatedProperties();

        return (
            <View style={ styles.container }>

                { /* Container within which resistances will be moved/zoomed. Needed to
                     set the stage (container) and calculate its size for PanPinch */ }
                { this.props.matrix.defaultRadius &&
                    <View
                        style={[styles.resistancesContainer, {
                            left: this.bacteriumLabelColumnWidth +
                                (this.props.matrix.defaultRadius || 0),
                            top: this.antibioticLabelRowHeight + this.halfSpace,
                            width: windowWidth - this.bacteriumLabelColumnWidth - this.halfSpace,
                            height: windowHeight - this.antibioticLabelRowHeight - this.halfSpace,
                        }]}
                        onLayout={ev => this.props.handleContainerLayout(ev.nativeEvent.layout)}
                    >

                        { /* Vertical lines (substance class dividers; below resistances)
                             Only display after we know where to put them */ }
                        <Animated.View
                            style={[
                                {
                                    width: this.visibleAntibioticsWidth,
                                    height: this.visibleBacteriaHeight,
                                },
                                this.getPanPinchTransformation(),
                            ]}
                        >
                            { this.props.matrix.substanceClasses.map(sc => (
                                <SubstanceClassDivider
                                    key={sc.substanceClass.id}
                                    matrix={this.props.matrix}
                                    substanceClass={sc}
                                />
                            )) }
                        </Animated.View>


                        { /* Resistances: Below labels */ }
                        { /* Moved container into its own (non-animated) view hoping onLayout would
                             fire on android on initial load – which it doesn't seem to do */ }
                        <View
                            onLayout={ev => this.props.handleContentLayout(ev.nativeEvent.layout)}
                            ref={this.contentElement}
                            style={[
                                styles.resistanceCirclesContainer,
                                {
                                    width: this.visibleAntibioticsWidth,
                                    height: this.visibleBacteriaHeight,
                                },
                            ]}
                        >
                            <Animated.View
                                style={[
                                    styles.container,
                                    this.getPanPinchTransformation(),
                                ]}
                            >
                                { this.props.matrix.resistances.map(res => (
                                    <Resistance
                                        key={this.getResistanceKey(res)}
                                        matrix={this.props.matrix}
                                        resistance={res}
                                        onRender={this.resistanceRendered}
                                    />
                                ))}
                            </Animated.View>
                        </View>
                    </View>

                }

                { /* Antibiotics */ }
                <View
                    style={[
                        styles.antibioticLabelsContainer,
                        {
                            height: this.antibioticLabelRowHeight,
                            left: this.bacteriumLabelColumnWidth,
                            width: this.visibleAntibioticsWidth,
                            paddingLeft: this.halfSpace,
                        },
                        this.labelOpacity,
                    ]}
                >
                    <AntibioticLabelsContainer
                        style={{ left: this.halfSpace }}
                        matrix={this.props.matrix}
                        animatedLeft={this.props.animatedLeft}
                        animatedZoom={this.cappedLabelZoom}
                        containerWidth={this.visibleAntibioticsWidth}
                        additionalLabelSpacingIncrease={this.additionalLabelSpacingIncrease}
                        maxZoom={this.labelZoomCaps.max}
                    />
                </View>


                { /* Bacteria */ }
                <View
                    style={[
                        styles.bacteriumLabelsContainer,
                        {
                            width: this.bacteriumLabelColumnWidth,
                            top: this.antibioticLabelRowHeight,
                            height: this.visibleBacteriaHeight,
                            paddingTop: this.halfSpace,
                        },
                        this.labelOpacity,
                    ]}>
                    <BacteriumLabelsContainer
                        style={{ borderWidth: 1, borderColor: 'purple' }}
                        animatedTop={this.props.animatedTop}
                        containerHeight={this.visibleBacteriaHeight}
                        animatedZoom={this.cappedLabelZoom}
                        additionalLabelSpacingIncrease={this.additionalLabelSpacingIncrease}
                        maxZoom={this.labelZoomCaps.max}
                        matrix={this.props.matrix}/>
                </View>

                { /* Mask at the top left corner to hide labels */ }
                <View style={[styles.topLeftCorner, {
                    width: this.bacteriumLabelColumnWidth,
                    height: this.antibioticLabelRowHeight,
                }]} />

            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'grey',
    },
    antibioticLabelsContainer: {
        position: 'absolute',
        top: 0,
        // borderWidth: 1,
        // borderColor: 'deeppink',
        // backgroundColor: 'lightcoral',
        backgroundColor: 'white',
    },
    bacteriumLabelsContainer: {
        position: 'absolute',
        left: 0,
        // borderColor: 'tomato',
        // borderWidth: 1,
        // backgroundColor: 'coral',
        backgroundColor: 'white',
    },
    resistancesContainer: {
        // borderWidth: 1,
        // borderColor: 'salmon',
    },
    resistanceCirclesContainer: {
        position: 'absolute',
        top: 20,
        // borderWidth: 1,
        // borderColor: 'pink',
    },
    topLeftCorner: {
        backgroundColor: 'white',
        // borderWidth: 1,
        // borderColor: 'purple',
        position: 'absolute',
        top: 0,
        left: 0,
    },
});
