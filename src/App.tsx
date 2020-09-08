import React, {useState} from 'react';
import SvgMap from './components/svg-map';
import MultiSelect, {MultiSelectOption} from './components/multi-select';
import './App.css';
import genabackisOptions from './maps/genabackis';

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

function App(): JSX.Element {
    const [selectedOptions, setMapOptions] = useState(genabackisOptions);

    showHideMapLayers(selectedOptions, genabackisOptions);

    return (
        <div className="App">
            <div className="filters">
                <MultiSelect
                    title="Map Features"
                    options={genabackisOptions}
                    selected={selectedOptions}
                    onSelectionChange={(selection): void =>
                        setMapOptions(selection)
                    }
                />
            </div>
            <div className="map">
                <SvgMap src="genabackis-map.svg" />
            </div>
        </div>
    );
}

export default App;
