import React from 'react';
import { Svg } from 'expo';

export default class InfectLogo extends React.Component {

    render() {

        return (
            <Svg height={this.props.height} width={this.props.width} viewBox="0 0 38 32">
                { /* If logo needs an update:
                        - open assets/logo-infect-origina.pdf in Illustrator
                        - make your updates
                        - make sure all fonts are converted to Svg.Paths
                        - export through File → Export → Export for Screens (Save as … will reduce
                          file size and fuck up our nice circles) to assets/logo-infect-export.svg
                     Then:
                        - copy svg content from assets/logo-infect-export.svg (without title)
                          into this file's <Svg> tag
                        - replaced path with Svg.Path (add < before search terms)
                        - replace style=fill: with fill=
                        - update viewBox to match width/height of SVG (measure in Illustrator)
                */ }

                <Svg.Path d="M13.6,14.65a4.48,4.48,0,0,1,0-9h7v9Z" fill="#cbe264"/><Svg.Path d="M28.74,14.65a4.48,4.48,0,0,0,0-9H21.82v9Z" fill="#cbe264"/><Svg.Path d="M14.89,2.8a1.35,1.35,0,1,1-1.35-1.35A1.35,1.35,0,0,1,14.89,2.8Z" fill="#cbe264"/><Svg.Path d="M13.13,4.87a.41.41,0,0,1,.41-.42h0a.42.42,0,0,1,.42.42h0a.41.41,0,0,1-.42.41h0A.41.41,0,0,1,13.13,4.87Zm-1.34-.31a.4.4,0,0,1,0-.59h0a.41.41,0,0,1,.58,0h0a.4.4,0,0,1,0,.59h0a.4.4,0,0,1-.29.12h0A.4.4,0,0,1,11.79,4.56Zm2.92,0a.41.41,0,0,1,0-.58h0a.41.41,0,0,1,.59,0h0a.41.41,0,0,1,0,.58h0a.39.39,0,0,1-.29.13h0A.39.39,0,0,1,14.71,4.55ZM11.06,2.8a.41.41,0,0,1,.41-.42h0a.42.42,0,0,1,.42.42h0a.42.42,0,0,1-.42.42h0A.41.41,0,0,1,11.06,2.8Zm4.14,0h0a.4.4,0,0,1,.41-.41h0a.41.41,0,0,1,.42.41h0a.41.41,0,0,1-.42.41h0A.41.41,0,0,1,15.2,2.8Zm-4.14,0Zm.72-1.17a.42.42,0,0,1,0-.59h0a.42.42,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.42.42,0,0,1-.29.12h0A.42.42,0,0,1,11.78,1.63Zm2.93,0h0a.42.42,0,0,1,0-.59h0a.4.4,0,0,1,.59,0h0a.41.41,0,0,1,0,.58h0a.39.39,0,0,1-.3.13h0A.42.42,0,0,1,14.71,1.63ZM13.12.73a.42.42,0,0,1,.42-.42h0A.41.41,0,0,1,14,.73h0a.41.41,0,0,1-.41.41h0A.41.41,0,0,1,13.12.73Z" fill="#cbe264"/><Svg.Path d="M20.68,2.8a1.35,1.35,0,1,1-1.35-1.35A1.34,1.34,0,0,1,20.68,2.8Z" fill="#cbe264"/><Svg.Path d="M18.92,4.87a.41.41,0,0,1,.41-.42h0a.42.42,0,0,1,.42.42h0a.41.41,0,0,1-.42.41h0A.41.41,0,0,1,18.92,4.87Zm-1.34-.31a.4.4,0,0,1,0-.59h0a.41.41,0,0,1,.58,0h0a.41.41,0,0,1,0,.59h0a.44.44,0,0,1-.3.12h0A.4.4,0,0,1,17.58,4.56Zm2.92,0a.41.41,0,0,1,0-.58h0a.41.41,0,0,1,.59,0h0a.41.41,0,0,1,0,.58h0a.39.39,0,0,1-.29.13h0A.39.39,0,0,1,20.5,4.55ZM16.85,2.8a.41.41,0,0,1,.41-.42h0a.42.42,0,0,1,.42.42h0a.42.42,0,0,1-.42.42h0A.41.41,0,0,1,16.85,2.8ZM21,2.8h0a.41.41,0,0,1,.41-.41h0a.41.41,0,0,1,.42.41h0a.41.41,0,0,1-.42.41h0A.41.41,0,0,1,21,2.8Zm-4.14,0Zm.72-1.17a.42.42,0,0,1,0-.59h0a.42.42,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.42.42,0,0,1-.29.12h0A.42.42,0,0,1,17.57,1.63Zm2.93,0h0a.42.42,0,0,1,0-.59h0a.4.4,0,0,1,.59,0h0a.41.41,0,0,1,0,.58h0a.39.39,0,0,1-.3.13h0A.42.42,0,0,1,20.5,1.63ZM18.91.73a.42.42,0,0,1,.42-.42h0a.42.42,0,0,1,.42.42h0a.41.41,0,0,1-.42.41h0A.41.41,0,0,1,18.91.73Z" fill="#cbe264"/><Svg.Path d="M15.06,17.5a1.34,1.34,0,1,1-1.34-1.34A1.34,1.34,0,0,1,15.06,17.5Z" fill="#cbe264"/><Svg.Path d="M13.3,19.57a.41.41,0,0,1,.42-.41h0a.41.41,0,0,1,.42.41h0a.42.42,0,0,1-.42.42h0A.43.43,0,0,1,13.3,19.57ZM12,19.26a.41.41,0,0,1,0-.58h0a.41.41,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.42.42,0,0,1-.29.12h0A.42.42,0,0,1,12,19.26Zm2.93,0a.42.42,0,0,1,0-.59h0a.42.42,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.42.42,0,0,1-.3.12h0A.42.42,0,0,1,14.89,19.26Zm-3.66-1.75a.42.42,0,0,1,.42-.42h0a.42.42,0,0,1,.42.42h0a.41.41,0,0,1-.42.41h0A.41.41,0,0,1,11.23,17.51Zm4.14,0h0a.42.42,0,0,1,.42-.42h0a.43.43,0,0,1,.42.42h0a.42.42,0,0,1-.42.42h0A.42.42,0,0,1,15.37,17.5Zm-4.14,0ZM12,16.34a.42.42,0,0,1,0-.59h0a.42.42,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.42.42,0,0,1-.3.12h0A.42.42,0,0,1,12,16.34Zm2.93,0h0a.4.4,0,0,1,0-.59h0a.41.41,0,0,1,.58,0h0a.4.4,0,0,1,0,.59h0a.4.4,0,0,1-.29.12h0A.4.4,0,0,1,14.89,16.33Zm-1.59-.89a.42.42,0,0,1,.42-.42h0a.41.41,0,0,1,.41.41h0a.41.41,0,0,1-.41.42h0A.42.42,0,0,1,13.3,15.44Z" fill="#cbe264"/><Svg.Path d="M20.68,17.5a1.35,1.35,0,1,1-1.35-1.34A1.34,1.34,0,0,1,20.68,17.5Z" fill="#cbe264"/><Svg.Path d="M18.92,19.57a.41.41,0,0,1,.41-.41h0a.41.41,0,0,1,.42.41h0a.42.42,0,0,1-.42.42h0A.41.41,0,0,1,18.92,19.57Zm-1.34-.31a.39.39,0,0,1,0-.58h0a.4.4,0,0,1,.58,0h0a.41.41,0,0,1,0,.59h0a.44.44,0,0,1-.3.12h0A.4.4,0,0,1,17.58,19.26Zm2.92,0a.42.42,0,0,1,0-.59h0a.42.42,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.42.42,0,0,1-.29.12h0A.42.42,0,0,1,20.5,19.26Zm-3.65-1.75a.41.41,0,0,1,.41-.42h0a.42.42,0,0,1,.42.42h0a.41.41,0,0,1-.42.41h0A.41.41,0,0,1,16.85,17.51Zm4.14,0h0a.41.41,0,0,1,.41-.42h0a.42.42,0,0,1,.42.42h0a.42.42,0,0,1-.42.42h0A.41.41,0,0,1,21,17.5Zm-4.14,0Zm.72-1.17a.42.42,0,0,1,0-.59h0a.42.42,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.42.42,0,0,1-.29.12h0A.44.44,0,0,1,17.57,16.34Zm2.93,0h0a.42.42,0,0,1,0-.59h0a.42.42,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.42.42,0,0,1-.3.12h0A.42.42,0,0,1,20.5,16.33Zm-1.59-.89a.42.42,0,0,1,.42-.42h0a.41.41,0,0,1,.42.41h0a.42.42,0,0,1-.42.42h0A.42.42,0,0,1,18.91,15.44Z" fill="#cbe264"/><Svg.Path d="M7.24,10.21A1.35,1.35,0,1,1,5.89,8.87,1.35,1.35,0,0,1,7.24,10.21Z" fill="#cbe264"/><Svg.Path d="M5.48,12.28a.41.41,0,0,1,.41-.42h0a.42.42,0,0,1,.42.42h0a.42.42,0,0,1-.42.42h0A.41.41,0,0,1,5.48,12.28ZM4.14,12a.41.41,0,0,1,0-.59h0a.41.41,0,0,1,.58,0h0a.41.41,0,0,1,0,.59h0a.4.4,0,0,1-.29.12h0A.4.4,0,0,1,4.14,12Zm2.92,0a.42.42,0,0,1,0-.59h0a.42.42,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.42.42,0,0,1-.29.12h0A.42.42,0,0,1,7.06,12ZM3.41,10.21a.41.41,0,0,1,.41-.41h0a.41.41,0,0,1,.42.41h0a.42.42,0,0,1-.42.42h0A.41.41,0,0,1,3.41,10.21Zm4.14,0h0A.41.41,0,0,1,8,9.79H8a.41.41,0,0,1,.42.41h0a.42.42,0,0,1-.42.42H8A.41.41,0,0,1,7.55,10.21Zm-4.14,0ZM4.13,9a.42.42,0,0,1,0-.59h0a.42.42,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.42.42,0,0,1-.29.12h0A.42.42,0,0,1,4.13,9ZM7.06,9h0a.42.42,0,0,1,0-.59h0a.42.42,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.42.42,0,0,1-.3.12h0A.42.42,0,0,1,7.06,9Zm-1.59-.9a.42.42,0,0,1,.42-.42h0a.41.41,0,0,1,.41.42h0a.41.41,0,0,1-.41.42h0A.42.42,0,0,1,5.47,8.14Z" fill="#cbe264"/><Svg.Path d="M9.64,4.81A1.35,1.35,0,1,1,8.29,3.47,1.34,1.34,0,0,1,9.64,4.81Z" fill="#cbe264"/><Svg.Path d="M7.88,6.88a.41.41,0,0,1,.41-.41h0a.41.41,0,0,1,.42.41h0a.42.42,0,0,1-.41.42h0A.42.42,0,0,1,7.88,6.88ZM6.54,6.57a.4.4,0,0,1,0-.59h0a.42.42,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.44.44,0,0,1-.3.12h0A.42.42,0,0,1,6.54,6.57Zm2.92,0a.42.42,0,0,1,0-.59h0a.42.42,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.42.42,0,0,1-.29.12h0A.42.42,0,0,1,9.46,6.57ZM5.81,4.82a.41.41,0,0,1,.41-.42h0a.42.42,0,0,1,.42.42h0a.41.41,0,0,1-.42.41h0A.41.41,0,0,1,5.81,4.82Zm4.14,0h0a.41.41,0,0,1,.41-.42h0a.42.42,0,0,1,.42.42h0a.42.42,0,0,1-.42.42h0A.41.41,0,0,1,10,4.81Zm-4.14,0Zm.72-1.17a.42.42,0,0,1,0-.59h0a.42.42,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.42.42,0,0,1-.29.12h0A.44.44,0,0,1,6.53,3.65Zm2.93,0h0a.42.42,0,0,1,0-.59h0a.42.42,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.42.42,0,0,1-.3.12h0A.42.42,0,0,1,9.46,3.64Zm-1.59-.9a.41.41,0,0,1,.42-.41h0a.41.41,0,0,1,.42.41h0a.42.42,0,0,1-.42.42h0A.42.42,0,0,1,7.87,2.74Z" fill="#cbe264"/><Svg.Path d="M9.64,15.55A1.35,1.35,0,1,1,8.29,14.2,1.34,1.34,0,0,1,9.64,15.55Z" fill="#cbe264"/><Svg.Path d="M7.88,17.62a.41.41,0,0,1,.41-.42h0a.42.42,0,0,1,.42.42h0A.41.41,0,0,1,8.3,18h0A.41.41,0,0,1,7.88,17.62Zm-1.34-.31a.4.4,0,0,1,0-.59h0a.42.42,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.44.44,0,0,1-.3.12h0A.42.42,0,0,1,6.54,17.31Zm2.92,0a.41.41,0,0,1,0-.58h0a.4.4,0,0,1,.59,0h0a.41.41,0,0,1,0,.58h0a.39.39,0,0,1-.29.13h0A.39.39,0,0,1,9.46,17.3ZM5.81,15.55a.41.41,0,0,1,.41-.42h0a.42.42,0,0,1,.42.42h0a.42.42,0,0,1-.42.42h0A.41.41,0,0,1,5.81,15.55Zm4.14,0h0a.41.41,0,0,1,.41-.41h0a.41.41,0,0,1,.42.41h0a.41.41,0,0,1-.42.41h0A.41.41,0,0,1,10,15.55Zm-4.14,0Zm.72-1.17a.42.42,0,0,1,0-.59h0a.42.42,0,0,1,.59,0h0a.42.42,0,0,1,0,.59h0a.42.42,0,0,1-.29.12h0A.44.44,0,0,1,6.53,14.38Zm2.93,0h0a.42.42,0,0,1,0-.59h0a.4.4,0,0,1,.59,0h0a.41.41,0,0,1,0,.58h0a.39.39,0,0,1-.3.13h0A.42.42,0,0,1,9.46,14.38Zm-1.59-.9a.42.42,0,0,1,.42-.42h0a.42.42,0,0,1,.42.42h0a.41.41,0,0,1-.42.41h0A.41.41,0,0,1,7.87,13.48Z" fill="#cbe264"/><Svg.Path d="M2.58,31.62H.46V23.48H2.58Z" fill="#cbe264"/><Svg.Path d="M4,23.48H6.08l3.88,5h0v-5H12.1v8.14H10l-3.88-5h0v5H4Z" fill="#cbe264"/><Svg.Path d="M15.59,25.27v1.36h2.32v1.79H15.59v3.2H13.47V23.48h4.68v1.79Z" fill="#cbe264"/><Svg.Path d="M21.44,25.27v1.36h2.39v1.79H21.44v1.41H24v1.79H19.32V23.48H24v1.79Z" fill="#cbe264"/><Svg.Path d="M31.08,26.21a2.3,2.3,0,0,0-1.85-.9,2.15,2.15,0,0,0-2.17,2.26,2.11,2.11,0,0,0,2.2,2.22,2.42,2.42,0,0,0,1.82-.87v2.54a5.88,5.88,0,0,1-1.86.38,4.56,4.56,0,0,1-3.06-1.2,4,4,0,0,1-1.31-3.08,4.26,4.26,0,0,1,1.2-3,4.43,4.43,0,0,1,3.1-1.32,4.91,4.91,0,0,1,1.93.41Z" fill="#cbe264"/><Svg.Path d="M35.84,31.62H33.73V25.27H32V23.48h5.61v1.79H35.84Z" fill="#cbe264"/>

            </Svg>
        );
    }

}
