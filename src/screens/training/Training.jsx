import React from 'react';
import './training.css';
//import DevIcon from 'devicon-react-svg';
import { skills } from '../../helpers/skills';

function Training() {
  return (
    <>
      <div className='b-example-divider'></div>
      <div className='training__container' id='training'>
        <div>
          <h1 style={{ textAlign: 'center' }}>Some of the training we offer</h1>
        </div>
        <div className='training__cards__container'>
          {skills.map((e, idx) => {
            return (
              <div key={idx} className='training__card'>
                <img
                  className='training__images'
                  src={e.imageName}
                  alt='files'
                />
                <span
                  style={{
                    margin: '5px',
                    paddingBottom: 25,
                    fontSize: '1.5em'
                  }}
                >
                  {e.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Training;
