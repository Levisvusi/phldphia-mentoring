import React from 'react';
function ContactUs() {
  return (
    <>
      <div className='b-example-divider'></div>
      <div
        className='modal fade'
        id='contactModal'
        tabIndex='-1'
        aria-labelledby='ModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header bg-warning'>
              <h5 className='modal-title'>Contact Us</h5>
              <button
                className='btn-close'
                type='button'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='input-group mb-3'>
                  <span className='input-group-text'>
                    <i className='bi bi-person-fill'></i>
                  </span>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Fullname'
                    aria-label='fullname'
                    aria-describedby='fullname'
                  />
                </div>

                <div className='input-group mb-3'>
                  <span className='input-group-text'>
                    <i className='bi bi-envelope-open-fill'></i>
                  </span>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                    aria-label='email'
                    aria-describedby='email'
                  />
                </div>

                <div className='input-group mb-3'>
                  <span className='input-group-text'>
                    <i className='bi bi-pencil-fill'></i>
                  </span>
                  <textarea
                    type='text'
                    className='form-control'
                    placeholder='Message'
                    aria-label='message'
                    aria-describedby='message'
                    style={{ height: 'auto' }}
                    rows='5'
                  ></textarea>
                </div>
              </form>
            </div>
            <div className='d-grid'>
              <button type='button' className='btn btn-warning fw-bold'>
                <i className='bi bi-envelope-fill me-3'></i> Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
