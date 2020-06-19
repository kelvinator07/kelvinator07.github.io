import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './ScrollArrow.css';

const ScrollArrow = () => {
  
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
        }
    };
    
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    
    window.addEventListener('scroll', checkScrollTop)

    return (
        <div className="ScrollArrow" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}>
            <button className="btn pb-5"><span><FontAwesomeIcon icon={faArrowUp} /></span></button> 
        </div>
    );

  }

  export default ScrollArrow;