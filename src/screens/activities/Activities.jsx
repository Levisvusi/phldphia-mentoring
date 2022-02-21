import React from 'react';
import './activities.css';
import respect from '../../images/menimages/respect.png';
import identity from '../../images/menimages/identity.jpg';
import emotions from '../../images/menimages/emotions.jpg';
import responsible from '../../images/menimages/responsible.jpg';
import selflove from '../../images/menimages/self-love.jpg';
import kindness from '../../images/menimages/kindness.jpg';
import confidence from '../../images/menimages/confidence.jpg';
import peerpressure from '../../images/menimages/peer-pressure.jpg';

const Activities = () => {
  return (
    <section id='activities' className='my-5 text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col bg-secondary rounded mb-4 pt-5'>
            <div className='info-header mb-5 mt-5'>
              <h1 className='text-primary pb-3 fw-bold'>Activities</h1>
              <p className='lead text-white'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                vero ad enim, minus et debitis nulla dolorum autem repellendus
                ullam.
              </p>
            </div>
          </div>
        </div>

        {/** identity */}
        <div className='row mt-5'>
          <div className='col-lg-3 col-md-6'>
            <div className='card border-warning shadow p-3 mb-5 bg-white rounded'>
              <div className='card-body'>
                <img
                  src={identity}
                  alt=''
                  className='img-fluid
                  rounded-circle w-50 mb-3'
                />
                <h3>Identity</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, corporis?
                </p>
                <div className='d-flex justify-content-center'>
                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-facebook fa-2x text-primary'></i>
                    </a>
                  </div>

                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-twitter fa-2x text-info'></i>
                    </a>
                  </div>

                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-instagram fa-2x text-warning'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/** respect */}
          <div className='col-lg-3 col-md-6'>
            <div className='card border-primary shadow p-3 mb-5 bg-white rounded'>
              <div className='card-body'>
                <img
                  src={respect}
                  alt=''
                  className='img-fluid
                      rounded-circle w-50 mb-3'
                />
                <h3>Respect</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, corporis?
                </p>
                <div className='d-flex justify-content-center'>
                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-facebook fa-2x text-primary'></i>
                    </a>
                  </div>

                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-twitter fa-2x text-info'></i>
                    </a>
                  </div>

                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-instagram fa-2x text-warning'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/** selef love */}
          <div className='col-lg-3 col-md-6'>
            <div className='card border-primary shadow p-3 mb-5 bg-white rounded'>
              <div className='card-body'>
                <img
                  src={selflove}
                  alt=''
                  className='img-fluid
                      rounded-circle w-50 mb-3'
                />
                <h3>Self Love</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, corporis?
                </p>
                <div className='d-flex justify-content-center'>
                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-facebook fa-2x text-primary'></i>
                    </a>
                  </div>

                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-twitter fa-2x text-info'></i>
                    </a>
                  </div>

                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-instagram fa-2x text-warning'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/** emotions */}
          <div className='col-lg-3 col-md-6'>
            <div className='card border-warning shadow p-3 mb-5 bg-white rounded'>
              <div className='card-body'>
                <img
                  src={emotions}
                  alt=''
                  className='img-fluid
                          rounded-circle w-50 mb-3'
                />
                <h3>Emotions</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, corporis?
                </p>
                <div className='d-flex justify-content-center'>
                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-facebook fa-2x text-primary'></i>
                    </a>
                  </div>

                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-twitter fa-2x text-info'></i>
                    </a>
                  </div>

                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-instagram fa-2x text-warning'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/** responsible */}
          <div className='col-lg-3 col-md-6'>
            <div className='card border-primary shadow p-3 mb-5 bg-white rounded'>
              <div className='card-body'>
                <img
                  src={responsible}
                  alt=''
                  className='img-fluid
                              rounded-cricle w-50 mb-3'
                />
                <h3>Responsibilitity</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, corporis?
                </p>
                <div className='d-flex justify-content-center'>
                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-facebook fa-2x text-primary'></i>
                    </a>
                  </div>

                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-twitter fa-2x text-info'></i>
                    </a>
                  </div>

                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-instagram fa-2x text-warning'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/** kindness */}
          <div className='col-lg-3 col-md-6'>
            <div className='card border-primary shadow p-3 mb-5 bg-white rounded'>
              <div className='card-body'>
                <img
                  src={kindness}
                  alt=''
                  className='img-fluid
                              rounded-cricle w-50 mb-3'
                />
                <h3>Kindness</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, corporis?
                </p>
                <div className='d-flex justify-content-center'>
                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-facebook fa-2x text-primary'></i>
                    </a>
                  </div>

                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-twitter fa-2x text-info'></i>
                    </a>
                  </div>

                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-instagram fa-2x text-warning'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/** confidence */}
          <div className='col-lg-3 col-md-6'>
            <div className='card border-primary shadow p-3 mb-5 bg-white rounded'>
              <div className='card-body'>
                <img
                  src={confidence}
                  alt=''
                  className='img-fluid
                              rounded-cricle w-50 mb-3'
                />
                <h3>Confidence</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, corporis?
                </p>
                <div className='d-flex justify-content-center'>
                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-facebook fa-2x text-primary'></i>
                    </a>
                  </div>

                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-twitter fa-2x text-info'></i>
                    </a>
                  </div>

                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-instagram fa-2x text-warning'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/** peer pressure */}
          <div className='col-lg-3 col-md-6'>
            <div className='card border-primary shadow p-3 mb-5 bg-white rounded'>
              <div className='card-body'>
                <img
                  src={peerpressure}
                  alt=''
                  className='img-fluid
                              rounded-cricle w-50 mb-3'
                />
                <h3>Peer Pressure</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, corporis?
                </p>
                <div className='d-flex justify-content-center'>
                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-facebook fa-2x text-primary'></i>
                    </a>
                  </div>

                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-twitter fa-2x text-info'></i>
                    </a>
                  </div>

                  <div className='p-4'>
                    <a href='/'>
                      <i className='fab fa-instagram fa-2x text-warning'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Activities;
