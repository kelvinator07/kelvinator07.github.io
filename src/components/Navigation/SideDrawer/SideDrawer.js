import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const Openn = {
    transform: 'translateX(0)'
}

const Close = {
    transform: 'translateX(-100%)'
}


const sideDrawer = ( props ) => {
    let attachedClasses = {...Close};
    if (props.open) {
        attachedClasses = {...Openn};
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div style={attachedClasses} className="SideDrawer">
                <div className="Logo">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems clicked={props.drawerToggleClicked}/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;