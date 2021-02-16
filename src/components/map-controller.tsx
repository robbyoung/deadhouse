import React, {useState} from 'react';
import {Menu, MenuItem, ProSidebar, SubMenu} from 'react-pro-sidebar';
import SvgMap from './svg-map';
import MultiSelect, {MultiSelectOption} from './multi-select';
import {MapData} from '../maps/genabackis';

import './map-controller.css';
import Sidebar from './sidebar';

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
        <div>
            <div className="overlay">
                <Sidebar />
            </div>
            <div className="map">
                <SvgMap src={currentMap.src} />
            </div>
        </div>
    );
}

export default MapController;
