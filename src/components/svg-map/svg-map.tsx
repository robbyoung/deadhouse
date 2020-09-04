import React from 'react';
import { UncontrolledReactSVGPanZoom } from 'react-svg-pan-zoom';
import { ReactSvgPanZoomLoader } from 'react-svg-pan-zoom-loader';
const SvgMap = () => {
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
    return (
        <div>
            <ReactSvgPanZoomLoader src="genabackis-map.svg" render={content => (
                <UncontrolledReactSVGPanZoom
                    width={pageWidth}
                    height={pageHeight}
                    tool="pan"
                    background="#FFFFFF"
                    toolbarProps={{position: 'none'}}
                    miniatureProps={{position: 'none', background: '#FFFFFF', width: 0, height: 0}}>
                    <svg width={pageWidth} height={pageHeight}>
                        {content}
                    </svg>  
                </UncontrolledReactSVGPanZoom>
            )}/>
        </div>
    )
}

export default SvgMap;