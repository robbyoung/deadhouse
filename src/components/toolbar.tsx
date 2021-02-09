import React from 'react';
import {Link} from 'react-router-dom';
import './toolbar.css';

export interface ToolbarItem {
    name: string;
    subItems: string[];
}

const Toolbar = (): JSX.Element => {
    return (
        <div className="header">
            <Link to="/" className="home-link">
                <p className="title">Kurald Galain</p>
                <p className="subtitle">A Malazan Book of the Fallen Fansite</p>
            </Link>
        </div>
    );
};

export default Toolbar;
