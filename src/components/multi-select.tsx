import React from 'react';
import Select from 'react-select';
import './multi-select.css';

export interface MultiSelectOption {
    value: string;
    label: string;
}

interface MultiSelectProps {
    title: string;
    options: MultiSelectOption[];
    selected: MultiSelectOption[];
    onSelectionChange: (options: MultiSelectOption[]) => void;
}

const MultiSelect = (props: MultiSelectProps): JSX.Element => {
    const {title, options, selected, onSelectionChange} = props;
    return (
        <div className="multi-select">
            <p className="title">{title}</p>
            <Select
                isMulti
                options={options}
                onChange={(selection): void =>
                    onSelectionChange(
                        selection ? (selection as MultiSelectOption[]) : [],
                    )
                }
                value={selected}
            />
        </div>
    );
};

export default MultiSelect;
