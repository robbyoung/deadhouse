import React from 'react';
import MapSelector from './map-selector';

import './home-screen.css';

function HomeScreen(): JSX.Element {
    return (
        <div className="page">
            <MapSelector />

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
