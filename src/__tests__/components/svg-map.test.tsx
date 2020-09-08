import React from 'react';
import renderer from 'react-test-renderer';
import SvgMap from '../../components/svg-map';

// react-svg-pan-zoom throws errors while trying to work with the test DOM
jest.mock('react-svg-pan-zoom');

describe('SvgMap component', () => {
    it('Renders an SVG image', () => {
        const component = renderer.create(<SvgMap src="genabackis-map.svg" />);

        expect(component).toMatchSnapshot();
    });
});
