import React from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import Modal from '../components/Modal';
// import { ContactForm } from '../components/ContactForm';

const HomePage = () => {
  // Modal temporarily disabled
  // const shouldDisableModal = () => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   return urlParams.get('preview') === 'true' || urlParams.get('noSubscriptionModal') === 'true';
  // };

  // const [isModalOpen, setIsModalOpen] = useState(!shouldDisableModal());

  // useEffect(() => {
  //   window.openContactModal = () => setIsModalOpen(true);
  //   return () => {
  //     delete window.openContactModal;
  //   };
  // }, []);

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className="home-page">
      <main>
        <Hero />
        <InfoSection />
        <Contact />
      </main>
      <Footer />
      
      {/* Contact Modal - COMMENTED OUT FOR NOW */}
      {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm onClose={closeModal} />
      </Modal> */}
    </div>
  );
};

export default HomePage;