import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ProfileImage from '../images/profileImg.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
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
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/download'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Template Download
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/approved-research'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Researchs
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/approved-workshop'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Workshops
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/dashboard'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            </li>

          </ul>
          <Link
            to='/profile'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            <img src={ProfileImage} className="ProfileImg" href="/profile"></img>
          </Link>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
