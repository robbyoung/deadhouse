import React from 'react';

import './home-screen.css';

function HomeScreen(): JSX.Element {
    return (
        <div className="page">
            <div className="header">
                <p className="title">Kurald Galain</p>
                <p className="subtitle">A Malazan Book of the Fallen Fansite</p>
            </div>

            <div className="content">
                <img
                    className="map-button"
                    alt="Genabackis Map Thumbnail"
                    src="continent-icons/genabackis-icon.svg"
                />
                <img
                    className="map-button"
                    alt="Seven Cities Map Thumbnail"
                    src="continent-icons/seven-cities-icon.svg"
                />
                <img
                    className="map-button"
                    alt="Quon Tali Map Thumbnail"
                    src="continent-icons/quon-tali-icon.svg"
                />
                <img
                    className="map-button"
                    alt="Genabackis Map Thumbnail"
                    src="continent-icons/genabackis-icon.svg"
                />
                <img
                    className="map-button"
                    alt="Seven Cities Map Thumbnail"
                    src="continent-icons/seven-cities-icon.svg"
                />
                <img
                    className="map-button"
                    alt="Quon Tali Map Thumbnail"
                    src="continent-icons/quon-tali-icon.svg"
                />
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
