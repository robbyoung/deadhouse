import React from 'react';
import {Link} from 'react-router-dom';

import './map-selector.css';

function MapSelector(): JSX.Element {
    return (
        <div className="map-selection">
            <Link to="/genabackis">
                <img
                    className="map-button"
                    alt="Genabackis Map Thumbnail"
                    src="continent-icons/genabackis-icon.svg"
                />
            </Link>
            <Link to="/seven-cities">
                <img
                    className="map-button"
                    alt="Seven Cities Map Thumbnail"
                    src="continent-icons/seven-cities-icon.svg"
                />
            </Link>
            <Link to="/quon-tali">
                <img
                    className="map-button"
                    alt="Quon Tali Map Thumbnail"
                    src="continent-icons/quon-tali-icon.svg"
                />
            </Link>
        </div>
    );
}

export default MapSelector;
