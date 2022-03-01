import React from 'react';
import './Carousel.css';
import Button  from './Button';
//import homeImg from '../../public/images/img-9';

function Carousel() {
  return (
    <div className='carousel'>     
        <h1>Join The Adventure</h1> 
        <div className='carouselBtns'>
            <Button buttonStyle='btn--outline' buttonSize='btn--large'>Explore Now</Button>
        </div> 
    </div>
  )
}

export default Carousel;