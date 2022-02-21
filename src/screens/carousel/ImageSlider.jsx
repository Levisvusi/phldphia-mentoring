import React from 'react';
//import { sliderImage } from '../helpers/sliderImage';
import mentor1 from '../../images/mentorsliders/mentor1.jpg';
import mentor2 from '../../images/mentorsliders/mentor2.jpg';
import mentor3 from '../../images/mentorsliders/mentor3.jpg';
import mentor4 from '../../images/mentorsliders/mentor4.jpg';
import './imageSlider.css';

const ImageSlider = () => {
  return (
    <main id='home'>
      <div id='myCarousel' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#myCarousel'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#myCarousel'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#myCarousel'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
          <button
            type='button'
            data-bs-target='#myCarousel'
            data-bs-slide-to='3'
            aria-label='Slide 4'
          ></button>
        </div>

        {/* <div className='carousel-inner'>
          {sliderImage.map((s, id) => {
            return (
              <div className='carousel-item active'>
                <img
                  key={id}
                  className='bd-placeholder-img'
                  width='100%'
                  height='100%'
                  src={s.imageName}
                  alt={''}
                />
              </div>
            );
          })}
        </div> */}

        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              className='bd-placeholder-img'
              width='100%'
              height='100%'
              src={mentor1}
              alt=''
            />
          </div>

          <div className='carousel-item'>
            <img
              className='bd-placeholder-img'
              width='100%'
              height='100%'
              src={mentor2}
              alt=''
            />
          </div>
          <div className='carousel-item'>
            <img
              className='bd-placeholder-img'
              width='100%'
              height='100%'
              src={mentor3}
              alt=''
            />
          </div>
          <div className='carousel-item'>
            <img
              className='bd-placeholder-img'
              width='100%'
              height='100%'
              src={mentor4}
              alt=''
            />
          </div>
        </div>

        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#myCarousel'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#myCarousel'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </main>
  );
};
export default ImageSlider;
