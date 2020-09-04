import React from 'react';
import { UncontrolledReactSVGPanZoom } from 'react-svg-pan-zoom';
import { ReactSvgPanZoomLoader } from 'react-svg-pan-zoom-loader';
const SvgMap = () => {
    return (
        <div>
            <ReactSvgPanZoomLoader src="genabackis-map.svg" render={content => (
                <UncontrolledReactSVGPanZoom width={500} height={500}>
                    <svg width={500} height={500}>
                        {content}
                    </svg>  
                </UncontrolledReactSVGPanZoom>
            )}/>
        </div>
    )
}

export default SvgMap;