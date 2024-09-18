import React from 'react';
import heroImage from '../assets/HeroSection.png';

const HeroSection = () => {
  return (
    <section className="bg-secondary text-textPrimary py-20 dark:bg-primary">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h2 className="text-5xl font-bold">Discover Your Future</h2>
          <p className="text-lg">Find cutting-edge products at unbeatable prices.</p>
          <button className="btn-dark">Shop Now</button>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-end">
          <img src={heroImage} alt="Hero" className="rounded-lg shadow-lg"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;