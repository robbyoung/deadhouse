import React from 'react';
import renderer from 'react-test-renderer';
import {MapData} from '../../maps/genabackis';
import MapController from '../../components/map-controller';

// react-svg-pan-zoom throws errors while trying to work with the test DOM
jest.mock('react-svg-pan-zoom');

const testMapData: MapData = {
    src: 'test',
    layers: [
        {
            label: 'Option 1',
            value: '1',
        },
        {
            label: 'Option 2',
            value: '2',
        },
        {
            label: 'Option 3',
            value: '3',
        },
        {
            label: 'Option 4',
            value: '4',
        },
    ],
};

describe('MapController component', () => {
    it('Can render a map and a feature filter', () => {
        const component = renderer.create(<MapController data={testMapData} />);

        expect(component).toMatchSnapshot();
    });
});
