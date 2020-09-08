import React from 'react';
import renderer from 'react-test-renderer';
import MultiSelect, {MultiSelectOption} from '../../components/multi-select';

const testOptions: MultiSelectOption[] = [
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
];

describe('MultiSelect component', () => {
    it('Can render an empty multi-select', () => {
        const component = renderer.create(
            <MultiSelect
                title="Empty Multi Select"
                options={testOptions}
                selected={[]}
                onSelectionChange={(): void => undefined}
            />,
        );

        expect(component).toMatchSnapshot();
    });

    it('Can render a populated multi-select', () => {
        const component = renderer.create(
            <MultiSelect
                title="Populated Multi Select"
                options={testOptions}
                selected={[testOptions[0], testOptions[2]]}
                onSelectionChange={(): void => undefined}
            />,
        );

        expect(component).toMatchSnapshot();
    });
});
