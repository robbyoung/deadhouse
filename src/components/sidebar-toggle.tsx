import React from 'react';
import {FaCheckSquare, FaSquare} from 'react-icons/fa';
import {ToggleableSvgLayer} from '../state';
import './sidebar-toggle.css';

interface SidebarToggleProps {
    toggle: ToggleableSvgLayer;
    onToggle: (value: string) => void;
}

function SidebarToggle(props: SidebarToggleProps): JSX.Element {
    const {toggle, onToggle} = props;
    return (
        <div>
            <button type="button" onClick={() => onToggle(toggle.value)}>
                {toggle.toggledOn ? <FaCheckSquare /> : <FaSquare />}
                {toggle.label}
            </button>
        </div>
    );
}

export default SidebarToggle;
