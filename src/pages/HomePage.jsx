import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { ContactForm } from '../components/ContactForm';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Open modal by default

  useEffect(() => {
    // Make the modal function available globally for the Hero button
    window.openContactModal = () => setIsModalOpen(true);
    
    // Cleanup function
    return () => {
      delete window.openContactModal;
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home-page">
      <main>
        <Hero />
        <InfoSection />
        <Contact />
      </main>
      <Footer />
      
      {/* Contact Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default HomePage;