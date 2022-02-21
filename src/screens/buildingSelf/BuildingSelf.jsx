import React from 'react';
import child1 from '../../images/menimages/child1.jpg';
import child2 from '../../images/menimages/child2.jpg';
import child3 from '../../images/menimages/child3.jpg';
import child4 from '../../images/menimages/child4.jpg';
const BuildingSelf = () => {
  return (
    <section id='boxes' className='py-5'>
      <h1 className='text-center'>We believe In</h1>
      <div className='container'>
        <div className='row'>
          {/* card 1 */}
          <div className='col-md-3'>
            <div
              className='card flip-card text-center border-primary mb-resp
                border-warning border-2'
            >
              <div className='card-body'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front bg-clear'>
                    <h3 className='text-primary'>Think Different.</h3>
                    <p className='text-muted'>
                      resilience, kindness, gratitude, how to make a positive
                      impact, relationship building, leadership, compassion!
                    </p>
                  </div>

                  <div className='flip-card-back'>
                    <img src={child1} alt='' style={{ width: '100%' }} />
                    <a
                      href='/'
                      className='btn btn-primary btn-sm text-white
                    fw-bold fs-5'
                    >
                      <i className='fas fa-arrow-right me-2'></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end card 1 */}

          {/* card 2 */}
          <div className='col-md-3'>
            <div
              className='card flip-card text-center border-primary mb-resp
                border-primary border-2 text-white'
            >
              <div className='card-body'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <h3>Open Happiness.</h3>
                    <p className='text-muted'>
                      bullying, abuse, emotions, anxiety, forgiveness, trauma!
                    </p>
                  </div>
                  <div className='flip-card-back'>
                    <img src={child2} alt='' style={{ width: '100%' }} />
                    <a
                      href='/'
                      className='btn btn-outline-secondary btn-sm text-white
                    fw-bold fs-5'
                    >
                      <i className='fas fa-arrow-right me-2'></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end card 2 */}

          {/* card 3 */}
          <div className='col-md-3'>
            <div
              className='card flip-card text-center border-primary mb-resp
                border-warning border-2'
            >
              <div className='card-body'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front bg-clear'>
                    <h3 className='text-primary'>You Worth It.</h3>
                    <p className='text-muted'>
                      identity, self-confidence, self-love, self-esteem,
                      self-respect, self-responsibility, good decisions, peer
                      pressure, acceptance, body image!
                    </p>
                  </div>
                  <div className='flip-card-back'>
                    <img src={child3} alt='' style={{ width: '100%' }} />
                    <a
                      href='/'
                      className='btn btn-primary btn-sm text-white
                    fw-bold fs-5'
                    >
                      <i className='fas fa-arrow-right me-2'></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end card 3 */}

          {/* card 4 */}
          <div className='col-md-3'>
            <div
              className='card flip-card text-center border-primary mb-resp
                border-primary border-2 text-white'
            >
              <div className='card-body'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <h3>Just Do It.</h3>
                    <p className='text-muted'>
                      responsibility, perseverance, courage, honesty, integrity,
                      commitment, independence, potential and how to empower
                      themselves, spirituality and its importance!
                    </p>
                  </div>
                  <div className='flip-card-back'>
                    <img src={child4} alt='' style={{ width: '100%' }} />
                    <a
                      href='/'
                      className='btn btn-outline-secondary btn-sm text-white
                    fw-bold fs-5'
                    >
                      <i className='fas fa-arrow-right me-2'></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card 4 */}
        </div>
      </div>
    </section>
  );
};

export default BuildingSelf;
