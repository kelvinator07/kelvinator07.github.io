import React from 'react';
import './About.css';
import { ProfileImage } from '../../assets/images';

const about = (props) => {
    return(
        <div className="About">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                    <p>Kelvin is a Computer Science graduate with over 4 years of software development experience. I have worked with a couple of languages and tools during this time,
                        proficient level in languages like JAVA, Javascript, Typescript Languages. Frameworks that I have also worked with professionally are Bootstrap, React,
                        Angular, Wordpress, Android, Spring, NodeJS, Jenkins, Docker. I'm currently solving problems and creating new solutions in the financial tech space with SystemSpecs (REMITA) as a Backend Engineer.
                        Also interested in the Devops space so I can build, ship and scale features faster to production.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        {/* <img src="https://via.placeholder.com/310x310.png?text=Profile+Image" className="img-fluid" alt="Profile Image"/> */}
                        <img src={ProfileImage} className="img-fluid" alt="Profile Image"/>
                        
                    </div>

                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Android Mobile &amp; Full Stack Web Developer.</h3>
                        <p className="font-italic">
                        Developed over 25 web and mobile applications within the last 4 years.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li> <strong>Birthday:</strong> 13 Jan 2020</li>
                                    <li> <strong>Website:</strong> www.geekykel.com</li>
                                    <li> <strong>Mobile:</strong> +234 809 171 4477</li>
                                    <li> <strong>City:</strong> Lagos, Nigeria</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li> <strong>Age:</strong> 20</li>
                                    <li> <strong>Degree:</strong> OpenClassrooms &gt; Développeur(euse) d’application.</li>
                                    <li> <strong>Email:</strong> kelvinator4leo@gmail.com</li>
                                    <li> <strong>Freelance:</strong> Available</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Feel Free to reach out to me lets have a technical discussion.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default about;