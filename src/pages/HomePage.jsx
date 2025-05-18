import React from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <main>
        <Hero />
        <InfoSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;