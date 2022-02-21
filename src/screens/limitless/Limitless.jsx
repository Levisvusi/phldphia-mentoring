import React from 'react';
import './limitless.css';
import TypeAnimation from 'react-type-animation';

function Limitless() {
  return (
    <div>
      <div className='main-info'>
        <TypeAnimation
          cursor={true}
          sequence={[
            'With true power lies in being greater than your previous self.',
            3000,
            '',
            'With greate power comes with greate Responsibility ',
            2000,
            '',
            'The power is in the Mind',
            2000,
            '',
            'Power is your control, control is your Power',
            2000,
            '',
            'Use your power to change for Good',
            3000,
            '',
            'You are worth your Power',
            3000,
            '',
            'Take control of your life',
            3000,
            '',
            ''
          ]}
          wrapper='span'
          repeat={Infinity}
        />
      </div>
    </div>
  );
}

export default Limitless;
