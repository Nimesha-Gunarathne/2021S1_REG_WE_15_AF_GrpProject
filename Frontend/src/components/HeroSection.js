import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Video from '../videos/video-1.mp4'

function HeroSection() {
  return (
   <div className="IT19145280_HS"> 
      <div className='hero-container'>
        <video src={Video} autoPlay loop muted />
        <h1>Title/date/</h1>
        <p>3RD INTERNATIONAL CONFERENCE</p>
      </div>
  </div>   
  );
}

export default HeroSection;
