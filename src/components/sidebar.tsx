import React from 'react';
import {FaMap, FaTree} from 'react-icons/fa';
import {GiFootsteps} from 'react-icons/gi';
import {Menu, MenuItem, ProSidebar, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Link} from 'react-router-dom';
import {ToggleableSvgLayer} from '../state';
import SidebarToggle from './sidebar-toggle';
import './sidebar.css';

interface SidebarProps {
    features: ToggleableSvgLayer[];
    onFeatureSelect: (key: string) => void;
}
function Sidebar(props: SidebarProps): JSX.Element {
    const {features, onFeatureSelect} = props;
    return (
        <ProSidebar collapsed>
            <Menu>
                <SubMenu icon={<FaMap size={22} />} title="Maps">
                    <MenuItem>
                        <Link to="/genabackis">Genabackis</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/seven-cities">Seven Cities</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/quon-tali">Quon Tali</Link>
                    </MenuItem>
                </SubMenu>
                <SubMenu icon={<FaTree size={22} />} title="Features">
                    {features.map((feature) => (
                        <SidebarToggle
                            toggle={feature}
                            onToggle={(value): void => onFeatureSelect(value)}
                        />
                    ))}
                </SubMenu>
                <SubMenu icon={<GiFootsteps size={40} />} title="Paths">
                    <SubMenu title="Gardens of the Moon">
                        <MenuItem>Ganoes Paran</MenuItem>
                    </SubMenu>
                    <SubMenu title="Deadhouse Gates" popperarrow>
                        <MenuItem>Icarium & Mappo</MenuItem>
                    </SubMenu>
                    <SubMenu title="Memories of Ice">
                        <MenuItem>Gruntle & Stonny</MenuItem>
                    </SubMenu>
                </SubMenu>
            </Menu>
        </ProSidebar>
    );
}

export default Sidebar;
