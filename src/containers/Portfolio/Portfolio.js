import React, { Component } from 'react';
import './Portfolio.css';
import { First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eight, Ninth, Mobile1, Mobile2, Mobile3 } from '../../assets/images';

class portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false,
            portfolioImages: []
        }
    }

componentDidMount() {
    this.setState({
        portfolioImages: [First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eight, Ninth]
    })
}

portfolioImagesHandler = (type) => {
    if (type === "web") {
        this.setState({
            portfolioImages: [First, Third, Fifth, Seventh, Ninth]
        })
    } else if (type === "mobile") {
        this.setState({
            portfolioImages: [Mobile1, Mobile2, Mobile3]
        })
    } else {
        this.setState({
            portfolioImages: [First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eight, Ninth]
        })
    }
    
}

    render() {
        return(
            <div className="Portfolio portfolio section-bg">
                    <div className="container">
    
                        <div className="section-title">
                            <h2>Portfolio</h2>
                            <p>These are some of the software applications I have developed within the last 4 years. Click on each of them to view more details about the project.</p>
                        </div>
    
                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <ul id="portfolio-flters">
                                    <li className="filter-active" onClick={() => this.portfolioImagesHandler("all")}>All</li>
                                    <li onClick={() => this.portfolioImagesHandler("mobile")}>Mobile</li>
                                    <li onClick={() => this.portfolioImagesHandler("web")}>Web</li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="row portfolio-container">
                            
                            {this.state.portfolioImages.map((value, key) => {
                                return (
                                        <div className="col-lg-4 col-md-6 portfolio-item" key={key}>
                                            <div className="portfolio-wrap">
                                            <img src={value} className="img-fluid" alt=""/>
                                            <div className="portfolio-links">
                                                <a href={value} title={value}></a>
                                                <a href="#" title="More Details"></a>
                                            </div>
                                            </div>
                                        </div>
                                )
                            })}
    
                        </div>
    
                </div>
            </div>
        );
    }
    
};

export default portfolio;