import React from 'react';

import kelvinLogo from '../../assets/images/kelvin-logo.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logoo">
        <img src={kelvinLogo} alt="MyBurger" />
    </div>
);

export default logo;