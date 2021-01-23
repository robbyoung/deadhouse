import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import renderer from 'react-test-renderer';
import MapSelector from '../../components/map-selector';

describe('MapSelector component', () => {
    it('Can render a list of map buttons', () => {
        const component = renderer.create(
            <Router>
                <MapSelector />
                <Switch>
                    <Route path="/">
                        <div />
                    </Route>
                </Switch>
            </Router>,
        );

        expect(component).toMatchSnapshot();
    });
});
