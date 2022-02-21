import React from 'react';

const Newsletter = () => {
  return (
    <section id='newsletter' className='bg-dark text-white py-5'>
      <div className='container'>
        <div className='row'>
          <div className='info-header mb-5'>
            <h1 className='text-primary pb-3 ps-5 text-center'>
              Want to get weekly letter?
            </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 mb-1'>
            <input
              type='text'
              className='form-control
                   form-control-lg mb-resp'
              placeholder='Fullname'
            />
          </div>

          <div className='col-md-4 mb-1'>
            <input
              type='email'
              className='form-control
                form-control-lg mb-resp'
              placeholder='Email'
            />
          </div>
          <div className='col-md-4 d-grid mb-1'>
            <button className='btn btn-primary btn-block fw-bold'>
              <i className='fas fa-sign-in-alt me-3'></i> Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
