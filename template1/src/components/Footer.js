import React from 'react'
import Button from './Button';
import './Footer.css'
import '../App.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
        <h2 align='center'>Join the Adventure to receive our best vacation deals</h2>
        <p align='center'>You can unsubcribe at any time!</p>
        <div className='emailInput' align='center'>
            <input className='email' type='textarea' placeholder='Your Email'></input>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
        </div>
        <div className='row'>
            <div className='col'>
                <h2>About Us</h2>
                <p>How it works</p>
                <p>Testimonials</p>
                <p>Terms of Service</p>
            </div>
            <div className='col'>
                <h2>Contact Us</h2>
                <p>Contact</p>
                <p>Support</p>
                <p>Destinations</p>
            </div>
            <div className='col'>
                <h2>Videos</h2>
                <p>Ambassador</p>
                <p>Agency</p>
                <p>Influencer</p>
            </div>
            <div className='col'>
                <h2>Social Media</h2>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <Link to='/' className='navbar-logo'>
                    TRVL <i className='fab fa-typo3' />
                </Link>
            </div>
            <div className='col'>
                <p>TRVL @ 2020</p>
            </div>
            <div className='col socialLogos'>
                <Link to='/' className='navbar-logo'>
                    <span class="fab fa-instagram"></span>
                </Link>
                <Link to='/' className='navbar-logo'>
                    <span class="fab fa-facebook-f"></span>
                </Link>
                <Link to='/' className='navbar-logo'>
                    <span class="fab fa-twitter"></span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer