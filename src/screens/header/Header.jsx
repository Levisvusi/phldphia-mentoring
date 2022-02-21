import React from 'react';

import banner from '../../images/menimages/banner-img.png';
import Limitless from '../limitless/Limitless';

function Header() {
  return (
    <section className='py-5' id='bannerArea'>
      <div className='primary-overlay text-white'>
        <div className='container'>
          <div className='row pt-5'>
            <div className='col-lg-6 text-center pt-5'>
              <h1 className='display-2 mt-5 pt-5 ps-5 fw-bold'>
                Respect your self Love your self!
              </h1>

              <p className='lead'>
                <Limitless />
              </p>
            </div>
            <div className='col-lg-6'>
              <img
                src={banner}
                alt=''
                className='img-fluid d-none d-lg-block'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
