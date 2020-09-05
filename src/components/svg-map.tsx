import React from 'react';
import { UncontrolledReactSVGPanZoom } from 'react-svg-pan-zoom';
import { ReactSvgPanZoomLoader } from 'react-svg-pan-zoom-loader';

interface SvgMapProps {
    src: string;
}

const SvgMap = (props: SvgMapProps) => {
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
    return (
        <div>
            <ReactSvgPanZoomLoader src={props.src} render={content => (
                <UncontrolledReactSVGPanZoom
                    width={pageWidth}
                    height={pageHeight}
                    tool="pan"
                    background="#FFFFFF"
                    toolbarProps={{position: 'none'}}
                    miniatureProps={{position: 'none', background: '#FFFFFF', width: 0, height: 0}}>
                    <svg width={window.innerHeight} height={window.innerHeight}>
                        {content}
                    </svg>  
                </UncontrolledReactSVGPanZoom>
            )}/>
        </div>
    )
}

export default SvgMap;