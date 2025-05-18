import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const KontaktPage = () => {
  return (
    <div className="kontakt-page">
      <div className="fixed top-0 left-0 right-0 z-40 bg-gray-900 shadow-lg py-3">
        <Navbar />
      </div>
      
      <main className="pt-24">
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default KontaktPage;