import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import renderer from 'react-test-renderer';
import HomeScreen from '../../components/home-screen';

describe('Home screen component', () => {
    it('Can render the home screen', () => {
        const component = renderer.create(
            <Router>
                <HomeScreen />,
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
