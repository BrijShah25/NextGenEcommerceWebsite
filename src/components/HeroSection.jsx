import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-secondary text-textPrimary py-20 dark:bg-primary">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold">Discover Your Future</h2>
          <p className="text-lg">Find cutting-edge products at unbeatable prices.</p>
          <button className="btn-dark">Shop Now</button>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2">
          <img src="https://via.placeholder.com/300?text=Hero" alt="Hero" className="rounded-lg shadow-lg"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

