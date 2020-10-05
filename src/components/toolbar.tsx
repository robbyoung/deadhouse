import React, {useState} from 'react';
import './toolbar.css';

export interface ToolbarItem {
    name: string;
    subItems: string[];
}

export interface ToolbarProps {
    items: ToolbarItem[];
    startingIndex: number;
    onSelect: (selectedName: string) => void;
}

const Toolbar = (props: ToolbarProps): JSX.Element => {
    const {items, startingIndex, onSelect} = props;
    const [toolbarIndex, updateToolbarIndex] = useState(startingIndex);

    return (
        <div>
            <div className="toolbar">
                {items.map((item, index) => (
                    // eslint-disable-next-line
                    <p
                        onClick={(): void => updateToolbarIndex(index)}
                        key={`toolbar-${item.name}`}
                        className={
                            toolbarIndex === index
                                ? 'toolbar-item selected'
                                : 'toolbar-item'
                        }>
                        {item.name}
                    </p>
                ))}
            </div>
            <div className="sub-toolbar">
                {items[toolbarIndex].subItems.map((subItem) => (
                    // eslint-disable-next-line
                    <p
                        onClick={(): void => onSelect(subItem)}
                        key={`toolbar-${subItem}`}
                        className="toolbar-item">
                        {subItem}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Toolbar;
