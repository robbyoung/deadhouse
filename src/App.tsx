import React, {useState} from 'react';
import SvgMap from './components/svg-map';
import MultiSelect, {MultiSelectOption} from './components/multi-select';
import './App.css';

function App(): JSX.Element {
    const mapOptions: MultiSelectOption[] = [
        {
            label: 'Outline',
            value: 'Outline',
        },
        {
            label: 'Cities',
            value: 'Cities',
        },
    ];
    const [selectedOptions, setMapOptions] = useState(mapOptions);

    return (
        <div className="App">
            <div className="filters">
                <MultiSelect
                    title="Map Features"
                    options={mapOptions}
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
