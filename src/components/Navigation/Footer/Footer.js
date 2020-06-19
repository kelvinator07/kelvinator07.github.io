import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";

const footer = () => {
    return(
        <footer className="Footer">
            {/* <div class="d-flex flex-row">
                <div class="copyright mr-5">
                    &copy; Copyright <strong><span>Geeky Kel 2020</span></strong>
                </div>
                <div class="credits">
                    Designed by <a href="#">Geeky Kel</a>
                </div>
            </div> */}
            <div className="social-icons">
                <ul>
                    <li className=""><a href="https://facebook.com/kelvinator05" target="_blank"> <span><FontAwesomeIcon icon={faFacebook} /></span></a></li> 
                    <li className=""><a href="https://twitter.com/kelvinator05" target="_blank"> <span><FontAwesomeIcon icon={faTwitter} /></span></a></li> 
                    <li className=""><a href="https://www.linkedin.com/in/kelvinobukome/" target="_blank"> <span><FontAwesomeIcon icon={faLinkedin} /></span></a></li>                 
                </ul>
            </div>
            <div>
            </div>
        </footer>
    )
}

export default footer;