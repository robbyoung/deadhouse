import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeScreen from './components/home-screen';
import MapController from './components/map-controller';

function App(): JSX.Element {
    return (
        <Router>
            <Switch>
                <Route path="/genabackis">
                    <MapController />
                </Route>
                <Route path="/seven-cities">
                    <MapController />
                </Route>
                <Route path="/quon-tali">
                    <MapController />
                </Route>
                <Route path="/">
                    <HomeScreen />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
