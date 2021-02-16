import React from 'react';
import {FaMap, FaWifi} from 'react-icons/fa';
import {Menu, MenuItem, ProSidebar, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Link} from 'react-router-dom';
import './sidebar.css';

function Sidebar(): JSX.Element {
    return (
        <ProSidebar collapsed>
            <Menu iconShape="square">
                <SubMenu icon={<FaMap />} title="Maps">
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
            </Menu>
        </ProSidebar>
    );
}

export default Sidebar;
