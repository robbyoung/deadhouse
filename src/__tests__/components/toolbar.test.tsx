import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Toolbar from '../../components/toolbar';

describe('Toolbar component', () => {
    it('Can render a toolbar with basic navigation', () => {
        const component = renderer.create(
            <Router>
                <Toolbar />,
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
