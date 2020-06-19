import React from 'react';
import { NavLink } from "react-router-dom";
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import routes from '../../../routes';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        {routes.map((value, key) => {
            return (
                    <NavigationItem link={value.path} navSelected={props.clicked} key={key}>
                        {value.name}
                    </NavigationItem>
            )
        })}
     </ul>

    // <ul className="NavigationItems">
    //     <NavigationItem link="/" active>Home</NavigationItem>
    //     <NavigationItem link="/">About</NavigationItem>
    //     <NavigationItem link="/">Resume</NavigationItem>
    //     <NavigationItem link="/">Portfolio</NavigationItem>
    //     <NavigationItem link="/">Services</NavigationItem>
    //     <NavigationItem link="/">Contact</NavigationItem>
    // </ul>
);

export default navigationItems;