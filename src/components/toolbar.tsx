import React, {useState} from 'react';
import './toolbar.css';

export interface ToolbarItem {
    name: string;
    subItems: string[];
}

export interface ToolbarProps {
    items: ToolbarItem[];
    startingIndex: number;
}

const Toolbar = (props: ToolbarProps): JSX.Element => {
    const {items, startingIndex} = props;
    const [toolbarIndex, updateToolbarIndex] = useState(startingIndex);

    return (
        <div>
            <div className="toolbar">
                {items.map((item, index) => (
                    <p
                        onClick={() => updateToolbarIndex(index)}
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
                    <p className="toolbar-item">{subItem}</p>
                ))}
            </div>
        </div>
    );
};

export default Toolbar;
