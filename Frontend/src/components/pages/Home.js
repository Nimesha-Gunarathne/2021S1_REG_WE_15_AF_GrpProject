import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import FlipCards from '../FlipCard';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import FooterNew from '../Footer/Footer';
import Navbar from '../Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FlipCards />
      <Cards />

      <FooterNew />
    </>
  );
}

export default Home;
