import React from 'react';
import './Flex.css';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import About from '../About/About';


function FlexDisplay ()  {
  return (
    <div className='flex-container'>
      <div className='flex-item'><Home /></div>
      <div className='flex-item'><About /></div>
      <div className='flex-item'><Services /></div>
      <div className='flex-item'><Contact /></div>
    </div>
  );
}

export default FlexDisplay;