import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedCategories from '../components/FeaturedCategories';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <WhyChooseUs />
      <FeaturedCategories />
      <Contact />
    </div>
  );
};

export default Home;