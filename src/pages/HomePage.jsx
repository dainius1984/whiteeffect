import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { ContactForm } from '../components/ContactForm';

const HomePage = () => {
  // Check URL parameters to determine if modal should be disabled
  const shouldDisableModal = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('preview') === 'true' || urlParams.get('noSubscriptionModal') === 'true';
  };

  const [isModalOpen, setIsModalOpen] = useState(!shouldDisableModal()); // Open modal by default unless URL params disable it

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