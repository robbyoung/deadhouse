import React from 'react';
import SvgMap from './components/svg-map';
import MultiSelect from './components/multi-select';
import './App.css';

function App(): JSX.Element {
    const mapOptions = [
        {
            label: 'Outline',
            value: 'Outline',
        },
        {
            label: 'Cities',
            value: 'Cities',
        },
    ];

    return (
        <div className="App">
            <div className="filters">
                <MultiSelect title="Map Features" options={mapOptions} />
            </div>
            <div className="map">
                <SvgMap src="genabackis-map.svg" />
            </div>
        </div>
    );
}

export default App;
