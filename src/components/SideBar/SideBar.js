import React from 'react';
import { NavLink } from "react-router-dom";

import Aux from '../../hoc/Aux';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import './SideBar.css';
import Backdrop from '../UI/Backdrop/Backdrop';

import logo from '../../logo.svg';
import routes from '../../routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHome, faAddressBook, faFileImage, faUserCheck, faServer, faSuitcase } from "@fortawesome/free-solid-svg-icons";

const Openn = {
    transform: 'translateX(0)'
}

const Close = {
    transform: 'translateX(-100%)'
}

const SideBar = (props) => {

    let attachedclassNamees = {...Close};
    if (props.open) {
        attachedclassNamees = {...Openn};
    }

    return(

        <div className="SideBar">

            <header id="header">
                <div className="d-flex flex-column">

                <div className="profile">
                    <img src={logo} alt="" className="img-fluid rounded-circle"/>
                    <h1 className="text-light"><a href="index.html">Geeky Kelvin</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a href="#" className="twitter"><span><FontAwesomeIcon icon={faTwitter} /></span></a>
                        <a href="#" className="facebook"><span><FontAwesomeIcon icon={faFacebook} /></span></a>
                        <a href="#" className="instagram"><span><FontAwesomeIcon icon={faInstagram} /></span></a>
                        <a href="#" className="google-plus"><span><FontAwesomeIcon icon={faGoogle} /></span></a>
                        <a href="#" className="linkedin"><span><FontAwesomeIcon icon={faLinkedin} /></span></a>
                    </div>
                </div>

                <nav className="nav-menu d-flex flex-column mt-3">
                    <ul>
                        <li className="active"><a href="index.html"><FontAwesomeIcon icon={faHome} /> <span>Home</span></a></li>
                        <li><a href="#about"><FontAwesomeIcon icon={faUserCheck} /> <span>About</span></a></li>
                        <li><a href="#resume"><FontAwesomeIcon icon={faFileImage} /> <span>Resume</span></a></li>
                        <li><a href="#portfolio"><FontAwesomeIcon icon={faSuitcase} /> Portfolio</a></li>
                        <li><a href="#services"><FontAwesomeIcon icon={faServer} /> Services</a></li>
                        <li><a href="#contact"><FontAwesomeIcon icon={faAddressBook} /> Contact</a></li>

                    </ul>
                     {/* < NavigationItems /> */}
                </nav>

                </div>
            </header>
            
        </div>
  
    );

    

}

export default SideBar;