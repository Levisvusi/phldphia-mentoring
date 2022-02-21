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
            'The True Power Lies In Being Greater Than Your Previous Self.',
            3000,
            '',
            'Greate Power Comes With Greate Responsibility ',
            2000,
            '',
            'The Power Is In the Mind',
            2000,
            '',
            'Power is Control, Control Is Power',
            2000,
            '',
            'Use Your Power to Change For Good',
            3000,
            '',
            'You Are Worth Your Power',
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
