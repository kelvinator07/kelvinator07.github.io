import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { NavLink } from 'react-router-dom';

const Open = {
    backgroundColor: 'lightblue'
}

const Close = {
    backgroundColor: 'transparent'
}

const toolbar = ( props ) => {

    let attachedclassNames = {...Close};
    if (props.navBarColor) {
        attachedclassNames = {...Open};
    }

    return(
        <header className="Toolbar" >
            {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
            <div style={{height: '100%', padding: '1px'}}>
                <NavLink to="/home"> <Logo/> </NavLink>
            </div>
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
            <DrawerToggle clicked={props.drawerToggleClicked} />
        </header>
    );
};

export default toolbar;