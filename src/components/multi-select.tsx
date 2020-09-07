import React from 'react';
import Select from 'react-select';
import './multi-select.css';

interface MultiSelectProps {
    title: string;
    options: {value: string; label: string}[];
}

const MultiSelect = (props: MultiSelectProps): JSX.Element => {
    const {title, options} = props;
    return (
        <div className="multi-select">
            <p className="title">{title}</p>
            <Select isMulti options={options} />
        </div>
    );
};

export default MultiSelect;
