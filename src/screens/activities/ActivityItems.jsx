import React from 'react';
import './activityItems.css';
import woman from '../../images/inspired/woman.jpg';
import man from '../../images/inspired/man.jpg';
import child from '../../images/inspired/child.jpg';
import family from '../../images/inspired/family.jpg';
const ActivityItems = () => {
  return (
    <>
      <div className='b-example-divider'></div>

      <div className='container px-4 py-5' id='custom-cards'>
        <h2 className='pb-2 border-bottom'>Social</h2>

        <div className='row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5'>
          <div className='col'>
            <div
              className='card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg'
              style={{ backgroundImage: `url(${man})` }}
            >
              <div className='d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1'>
                <h2 className='pt-5 mt-5 mb-4 display-6 lh-1 fw-bold'>
                  Respect, Good manners, humanity
                </h2>
                <ul className='d-flex list-unstyled mt-auto'>
                  <li className='me-auto'>
                    <img
                      src={man}
                      alt='Bootstrap'
                      width='32'
                      height='32'
                      className='rounded-circle border border-white'
                    />
                  </li>
                  <li className='d-flex align-items-center me-3'>
                    <svg className='bi me-2' width='1em' height='1em'></svg>
                    <small>Fathers</small>
                  </li>
                  <li className='d-flex align-items-center'>
                    <svg className='bi me-2' width='1em' height='1em'></svg>
                    <small>fathers</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col'>
            <div
              className='card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg'
              style={{ backgroundImage: `url(${woman})` }}
            >
              <div className='d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1'>
                <h2 className='pt-5 mt-5 mb-4 display-6 lh-1 fw-bold'>
                  resilience, kindness, gratitude, bullying, abuse, emotions,
                  anxiety, forgiveness, how to make a positive impact,
                  relationship building, leadership, compassion.
                </h2>
                <ul className='d-flex list-unstyled mt-auto'>
                  <li className='me-auto'>
                    <img
                      src={woman}
                      alt='woman'
                      width='32'
                      height='32'
                      className='rounded-circle border border-white'
                    />
                  </li>
                  <li className='d-flex align-items-center me-3'>
                    <svg className='bi me-2' width='1em' height='1em'></svg>
                    <small>Mothers</small>
                  </li>
                  <li className='d-flex align-items-center'>
                    <svg className='bi me-2' width='1em' height='1em'></svg>
                    <small>mothers</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col'>
            <div
              className='card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg'
              style={{ backgroundImage: `url(${child})` }}
            >
              <div className='d-flex flex-column h-100 p-5 pb-3 text-shadow-1'>
                <h2 className='pt-5 mt-5 mb-4 display-6 lh-1 fw-bold'>
                  identity, self-confidence, self-love, self-esteem,
                  self-respect, self-responsibility, good decisions, peer
                  pressure, acceptance, body image
                </h2>
                <ul className='d-flex list-unstyled mt-auto'>
                  <li className='me-auto'>
                    <img
                      src={child}
                      alt='teens'
                      width='32'
                      height='32'
                      className='rounded-circle border border-white'
                    />
                  </li>
                  <li className='d-flex align-items-center me-3'>
                    <svg className='bi me-2' width='1em' height='1em'></svg>
                    <small>Teens</small>
                  </li>
                  <li className='d-flex align-items-center'>
                    <svg className='bi me-2' width='1em' height='1em'></svg>
                    <small>Teenagers</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col'>
            <div
              className='card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg'
              style={{ backgroundImage: `url(${family})` }}
            >
              <div className='d-flex flex-column h-100 p-5 pb-3 text-shadow-1'>
                <h2 className='pt-5 mt-5 mb-4 display-6 lh-1 fw-bold'>
                  responsibility, perseverance, courage, honesty, integrity,
                  commitment, independence, potential and how to empower
                  themselves, trauma, spirituality and its importance.
                </h2>
                <ul className='d-flex list-unstyled mt-auto'>
                  <li className='me-auto'>
                    <img
                      src={family}
                      alt='family'
                      width='32'
                      height='32'
                      className='rounded-circle border border-white'
                    />
                  </li>
                  <li className='d-flex align-items-center me-3'>
                    <svg className='bi me-2' width='1em' height='1em'></svg>
                    <small>Family</small>
                  </li>
                  <li className='d-flex align-items-center'>
                    <svg className='bi me-2' width='1em' height='1em'></svg>
                    <small>family</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityItems;
