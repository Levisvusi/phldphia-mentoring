import React from 'react';
import philadephiamentor2 from '../images/inspired/philadephia-mentor2.jpg';
import philadephia1 from '../images/inspired/philadephia1.jpg';

const WordImage = () => {
  return (
    <>
      <div className='b-example-divider'></div>

      <div className='container px-4 py-5'>
        <h1>Some of the training we offer</h1>
        <img src={philadephiamentor2} width='50%' height='50%' alt=''></img>
        <img src={philadephia1} width='50%' height='50%' alt=''></img>
      </div>
    </>
  );
};

export default WordImage;
