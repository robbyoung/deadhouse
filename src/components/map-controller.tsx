import React, {useState} from 'react';
import SvgMap from './svg-map';
import MultiSelect, {MultiSelectOption} from './multi-select';
import Toolbar from './toolbar';
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
    data: MapData;
}

function MapController(props: MapControllerProps): JSX.Element {
    const {data} = props;
    const [selectedOptions, setMapOptions] = useState(data.layers);

    showHideMapLayers(selectedOptions, data.layers);

    return (
        <div className="App">
            <div className="overlay">
                <Toolbar
                    items={[
                        {
                            name: 'Maps',
                            subItems: ['Genabackis', 'Seven Cities'],
                        },
                        {
                            name: 'Deck of Dragons',
                            subItems: ['Dark', 'Chains'],
                        },
                    ]}
                    startingIndex={0}
                />
                <div className="filters">
                    <MultiSelect
                        title="Map Features"
                        options={data.layers}
                        selected={selectedOptions}
                        onSelectionChange={(selection): void =>
                            setMapOptions(selection)
                        }
                    />
                </div>
            </div>
            <div className="map">
                <SvgMap src={data.src} />
            </div>
        </div>
    );
}

export default MapController;
