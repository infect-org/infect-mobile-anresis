import React from 'react';
import { Svg } from 'expo';

export default class GuidelineIconArrowRight extends React.Component {

    render() {
        return (

            <Svg
                height={this.props.height}
                width={this.props.width}
                viewBox="0 0 9.891 16.954">
                <Svg.Path
                    d="M831,95.426l7.77,7.77-7.77,7.77"
                    transform="translate(-830.293 -94.719)"
                    fill="none"
                    stroke={this.props.stroke}
                    strokeWidth="2"/>
            </Svg>
        );
    }

}
