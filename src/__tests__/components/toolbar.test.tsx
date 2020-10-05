import React from 'react';
import renderer from 'react-test-renderer';
import Toolbar, {ToolbarItem} from '../../components/toolbar';

const testOptions: ToolbarItem[] = [
    {
        name: 'Tab 1',
        subItems: ['Option 1', 'Option 2'],
    },
    {
        name: 'Tab 2',
        subItems: ['Option 1'],
    },
    {
        name: 'Tab 3',
        subItems: [],
    },
];

describe('Toolbar component', () => {
    it('Can render a toolbar tab with no options', () => {
        const component = renderer.create(
            <Toolbar
                items={testOptions}
                startingIndex={2}
                onSelect={(): void => undefined}
            />,
        );

        expect(component).toMatchSnapshot();
    });

    it('Can render a toolbar tab with some options', () => {
        const component = renderer.create(
            <Toolbar
                items={testOptions}
                startingIndex={0}
                onSelect={(): void => undefined}
            />,
        );

        expect(component).toMatchSnapshot();
    });
});
