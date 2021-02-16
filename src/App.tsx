import {FaMap, FaWifi} from 'react-icons/fa';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import {Menu, MenuItem, ProSidebar, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeScreen from './components/home-screen';
import MapController from './components/map-controller';
import Toolbar from './components/toolbar';
import genabackis from './maps/genabackis';
import sevenCities from './maps/seven-cities';

function App(): JSX.Element {
    return (
        <Router>
            <Toolbar />
            <Switch>
                <Route path="/genabackis">
                    <MapController mapData={genabackis} />
                </Route>
                <Route path="/seven-cities">
                    <MapController mapData={sevenCities} />
                </Route>
                <Route path="/quon-tali">
                    <div />
                </Route>
                <Route path="/">
                    <HomeScreen />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
