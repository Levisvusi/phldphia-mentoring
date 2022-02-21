import React from 'react';
import './screens/header/header.css';
import './App.css';

import AboutUs from './screens/aboutUs/AboutUs';
import ContactUs from './screens/contactUs/ContactUs';
import FooterReserve from './screens/footer/Footer';
import NavigationBar from './screens/navigationBar/NavigationBar';
import Header from './screens/header/Header';
import BuildingSelf from './screens/buildingSelf/BuildingSelf';
import Motto from './screens/motto/Motto';
import Activities from './screens/activities/Activities';
//import Newsletter from './screens/newsletter/Newsletter';
//import Training from './screens/training/Training';
// import ImageSlider from './screens/carousel/ImageSlider';
// import ActivityItems from './screens/activities/ActivityItems';
// import WordImage from './mentor/wordImage';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Header />
      <AboutUs />
      <BuildingSelf />
      <Motto />
      <Activities />
      <ContactUs />
      <FooterReserve />
      {/*
      {/* <Newsletter />
      <Training />
      <ImageSlider />
      <WordImage />
      <ActivityItems />
      */}
    </div>
  );
}

export default App;
