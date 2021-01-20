import React from 'react';
import {Link} from 'react-router-dom';

import './home-screen.css';

function HomeScreen(): JSX.Element {
    return (
        <div className="page">
            <div className="content">
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

            <div className="footer">
                <p>
                    Malazan Book of the Fallen is the intellectual property of
                    Steven Erikson and Ian C. Esselmont.
                </p>
                <p>
                    This website is not for profit but for appreciation of the
                    world they have created.
                </p>
            </div>
        </div>
    );
}

export default HomeScreen;
