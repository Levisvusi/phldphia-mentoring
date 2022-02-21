import React from 'react';

const FooterReserve = () => {
  return (
    <>
      <div className='footer__container text-muted'>
        <div style={{ textAlign: 'center' }}>
          Philadephia Mentoring Copoyright&copy; {new Date().getFullYear()} All
          rights reserved
        </div>
      </div>
    </>
  );
};

export default FooterReserve;
