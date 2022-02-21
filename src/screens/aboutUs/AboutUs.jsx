import React from 'react';
import './aboutUs.css';
//import philadephia_letter from '../../images/philadephia_letter.jpg';
import philadephia_true from '../../images/philadephia_true.jpg';

function AboutUs() {
  return (
    <section className='about__container' id='about-us'>
      <div>
        <img src={philadephia_true} alt='person icon' />
      </div>
      <div className='about__text'>
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab possimus
          dolorem illo dolorum aperiam veritatis eius, commodi dignissimos
          beatae tempora accusamus ratione saepe quod doloribus ut natus,
          consequatur minima tempore.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
