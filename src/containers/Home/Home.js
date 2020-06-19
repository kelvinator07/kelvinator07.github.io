import React from 'react';
import './Home.css';
import Footer from '../../components/Navigation/Footer/Footer';

const home = (props) => {
    return(
        <div className="Home">
            <div className="hero-container">
                <h1>Hello, I'm Geeky Kelvin</h1>
                <p>I'm a Software Engineer based in Lagos Nigeria.<span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
            </div>
            <Footer />
        </div>
    );
}

export default home;