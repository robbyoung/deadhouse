import React from 'react';
import renderer from 'react-test-renderer';
import MapController from '../../components/map-controller';
import genabackis from '../../maps/genabackis';

// react-svg-pan-zoom throws errors while trying to work with the test DOM
jest.mock('react-svg-pan-zoom');

describe('MapController component', () => {
    it('Can render a map and a feature filter', () => {
        const component = renderer.create(
            <MapController mapData={genabackis} />,
        );

        expect(component).toMatchSnapshot();
    });
});
