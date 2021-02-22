import React, {useState} from 'react';
import SvgMap from './svg-map';
import {MapData} from '../maps/genabackis';

import './map-controller.css';
import Sidebar from './sidebar';

function showHideMapLayers(selection: string[], mapData: MapData): void {
    const available = mapData.layers.map((layer) => layer.value);
    available.forEach((layer) => {
        const element = document.getElementById(layer);
        const isSelected = selection.find((option) => option === layer);

        if (element) {
            if (isSelected) {
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
    const [currentLayers, setLayers] = useState(
        currentMap.layers.map((layer) => layer.value),
    );

    showHideMapLayers(currentLayers, currentMap);

    return (
        <div>
            <div className="overlay">
                <Sidebar
                    mapData={currentMap}
                    onFeatureSelect={(layer): void => {
                        let newLayers: string[];
                        if (currentLayers.find((option) => option === layer)) {
                            newLayers = currentLayers.filter(
                                (option) => option !== layer,
                            );
                        } else {
                            newLayers = [...currentLayers, layer];
                        }
                        setLayers(newLayers);
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
