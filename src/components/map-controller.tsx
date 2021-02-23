import React, {useState} from 'react';
import SvgMap from './svg-map';

import './map-controller.css';
import Sidebar from './sidebar';
import {MapData, ToggleableSvgLayer} from '../state';

function showHideMapLayers(layers: ToggleableSvgLayer[]): void {
    layers.forEach((layer) => {
        const element = document.getElementById(layer.value);

        if (element) {
            if (layer.toggledOn) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        }
    });
}

interface MapControllerProps {
    mapData: MapData;
}

function MapController(props: MapControllerProps): JSX.Element {
    const {mapData: currentMap} = props;
    const [currentLayers, setLayers] = useState(currentMap.layers);

    showHideMapLayers(currentLayers);

    return (
        <div>
            <div className="overlay">
                <Sidebar
                    features={currentLayers}
                    onFeatureSelect={(selected): void => {
                        const matchingIndex = currentLayers.findIndex(
                            (layer) => layer.value === selected,
                        );
                        const newLayers = [...currentLayers];

                        if (matchingIndex !== -1) {
                            newLayers[matchingIndex] = {
                                ...currentLayers[matchingIndex],
                                toggledOn: !currentLayers[matchingIndex]
                                    .toggledOn,
                            };
                            setLayers(newLayers);
                        }
                    }}
                />
            </div>
            <div className="map">
                <SvgMap src={currentMap.src} />
            </div>
        </div>
    );
}

export default MapController;
