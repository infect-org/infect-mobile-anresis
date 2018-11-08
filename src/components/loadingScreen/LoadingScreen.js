import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import InfectLogoWithAnresis from '../infectLogo/InfectLogoWithAnresis';
import styleDefinitions from '../../helpers/styleDefinitions';
import log from '../../helpers/log';
import componentStates from '../../models/componentStates/componentStates';

@observer
export default class LoadingScreen extends React.Component {

    logoWidth = 150;

    @computed get opacity() {
        return this.props.componentStates.components.get('filters') === componentStates.ready ?
            0 : 1;
    }

    getStateText(state) {
        return state === componentStates.ready ? state : `${state}…`;
    }

    render() {
        log('LoadingScreen: Render');
        // return null;
        return (
            <View
                style={[
                    styles.loadingScreenContainer,
                    {
                        opacity: this.opacity,
                    },
                ]}
            >

                <View style={[
                    styles.logoOuterContainer,
                    { height: this.logoWidth * 20.25 / 64.6 },
                ]}>
                    <View style={styles.logoInnerContainer}>
                        <InfectLogoWithAnresis
                            width={this.logoWidth}
                            height={this.logoWidth * 20.25 / 64.6} />
                    </View>
                </View>

                <Text style={styles.loadingScreenVersionText}>
                    Version: Beta-{this.props.version}
                </Text>
                <Text style={styles.loadingScreenEntityStatus}>
                    Bacteria:{'\u00A0'}
                    {this.getStateText(this.props.componentStates.components.get('bacteria'))}
                </Text>
                <Text style={styles.loadingScreenEntityStatus}>
                    Antibiotics:{'\u00A0'}
                    {this.getStateText(this.props.componentStates.components.get('antibiotics'))}
                </Text>
                <Text style={styles.loadingScreenEntityStatus}>
                    Resistances:{'\u00A0'}
                    {this.getStateText(this.props.componentStates.components.get('resistances'))}
                </Text>
                <Text style={styles.loadingScreenEntityStatus}>
                    Filters:{'\u00A0'}
                    {this.getStateText(this.props.componentStates.components.get('filters'))}
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    loadingScreenContainer: {
        flex: 1,
        backgroundColor: styleDefinitions.colors.green,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoOuterContainer: {
        width: '100%',
        marginBottom: 20,
    },
    logoInnerContainer: {
        // borderWidth: 1,
        // borderColor: 'purple',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingScreenVersionText: {
        ...styleDefinitions.fonts.bold,
        fontSize: 14,
        marginBottom: 20,
        color: styleDefinitions.colors.blackGreen,
    },
    loadingScreenEntityStatus: {
        ...styleDefinitions.fonts.condensed,
        fontSize: 14,
        color: styleDefinitions.colors.blackGreen,
    },
});
