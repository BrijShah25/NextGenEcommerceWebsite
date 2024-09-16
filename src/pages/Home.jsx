import React from 'react';
import Products from '../components/Products';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="dark">
      <HeroSection />
      <div className="container mx-auto">
        <Products />
      </div>
    </div>
  );
};

export default Home;
