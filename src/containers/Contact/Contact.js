import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const contact = (props) => {
    return(
        <div className="Contact">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>I'm available if you have an exciting idea or project to share with me so we can bring it to life. Contact me via the information below..</p>
                </div>

                <div className="row">

                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <span><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                <h4>Location:</h4>
                                <p>B22 Adams Street, Lekki, Lagos 23401</p>
                            </div>

                            <div className="email">
                                <span><FontAwesomeIcon icon={faAt} /></span>
                                <h4>Email:</h4>
                                <p>kelvinator4leo@gmail.com</p>
                            </div>

                            <div className="phone">
                                <span><FontAwesomeIcon icon={faPhone} /></span>
                                <h4>Mobile:</h4>
                                <p>+234 809 171 4477</p>
                            </div>


                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.127470631697!2d2.3482986156402657!3d48.874846479289154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1496fc9521%3A0xcf55b727f024061b!2sOpenclassrooms!5e0!3m2!1sen!2sng!4v1591664412148!5m2!1sen!2sng" frameborder="0" style={{width: '100%', height: '290px', border:'0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{border: '0', width: '100%', height: '290px'}} allowfullscreen></iframe> */}
                        </div>

                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="name">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" />
                                    <div className="validate"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="name">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" />
                                <div className="validate"></div>
                            </div>
                            <div className="form-group">
                                <label for="name">Message</label>
                                <textarea className="form-control" name="message" rows="10" required></textarea>
                                <div className="validate"></div>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default contact;