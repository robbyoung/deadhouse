import React, {useState} from 'react';
import SvgMap from './svg-map';
import MultiSelect, {MultiSelectOption} from './multi-select';
import {MapData} from '../maps/genabackis';

import './map-controller.css';

function showHideMapLayers(
    selection: MultiSelectOption[],
    available: MultiSelectOption[],
): void {
    available.forEach((layer) => {
        const element = document.getElementById(layer.value);
        const isSelected = selection.find(
            (option) => option.value === layer.value,
        );

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
    const [currentLayers, setLayers] = useState(currentMap.layers);

    showHideMapLayers(currentLayers, currentMap.layers);

    return (
        <div className="App">
            <div className="overlay">
                {/* <Toolbar
                    items={[
                        {
                            name: 'Maps',
                            subItems: ['Genabackis', 'Seven Cities'],
                        },
                    ]}
                    startingIndex={0}
                    onSelect={(mapName): void => {
                        const mapData = getMapData(mapName);
                        if (mapData) {
                            setMap(mapData);
                            setLayers(mapData.layers);
                        }
                    }}
                /> */}
                <div className="filters">
                    <MultiSelect
                        title="Map Features"
                        options={currentMap.layers}
                        selected={currentLayers}
                        onSelectionChange={(selection): void =>
                            setLayers(selection)
                        }
                    />
                </div>
            </div>
            <div className="map">
                <SvgMap src={currentMap.src} />
            </div>
        </div>
    );
}

export default MapController;
