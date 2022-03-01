import React, { useState, useEffect } from 'react';
import Button  from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Popup from './Popup';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const openPopup = () => setButtonPopup(true);
  const handleMobileMenuPopup = () => {
    closeMobileMenu();
    openPopup();
  }

  const showButton = () => {
    if (window.innerWidth <= 750) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              {!button && <Button onClick={handleMobileMenuPopup} buttonStyle='btn--outline'>SIGN UP</Button>}
            </li>
          </ul>
          {button && <Button onClick={openPopup} buttonStyle='btn--outline'>SIGN UP</Button>}
          <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
            <h1>Hello!</h1>
          </Popup>
        </div>
      </nav>
    </>
  );
}

export default Navbar;