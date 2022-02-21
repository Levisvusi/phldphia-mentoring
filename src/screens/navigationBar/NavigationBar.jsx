import React from 'react';
import logo from '../../images/menimages/logo.png';

const NavigationBar = () => {
  return (
    <nav
      className='navbar navbar-expand-sm navbar-light 
   bg-light fixed-top mb-5'
      id='main-nav'
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          <img src={logo} alt='' width='40' height='40' />
          <h3 className='d-inline align-middle'> WoW Coaching</h3>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarMenu'
          aria-controls='navbarMenu'
          aria-expanded='false'
          aria-label='Naviation Bar'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarMenu'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a href='#bannerArea' className='nav-link'>
                Home
              </a>
            </li>

            <li className='nav-item'>
              <a href='#about-us' className='nav-link'>
                About Us
              </a>
            </li>
            <li className='nav-item'>
              <a href='#training' className='nav-link'>
                Training
              </a>
            </li>
            <li className='nav-item'>
              <a href='#activities' className='nav-link'>
                Activities
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#contact-us'
                className='nav-link'
                data-bs-toggle='modal'
                data-bs-target='#contactModal'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
