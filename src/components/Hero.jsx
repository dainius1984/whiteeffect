import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  // State to detect low performance devices
  const [useVideoBackground, setUseVideoBackground] = useState(true);
  
  // Check for device performance on mount
  useEffect(() => {
    // Simple check for mobile or low-end devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    
    // Disable video on mobile/low-end devices
    if (isMobile || isLowEndDevice) {
      setUseVideoBackground(false);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Ultra-optimized Background */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75 z-10"></div>
        
        {/* Static image as fallback or for low-end devices */}
        <img 
          src="/img/hero-poster.jpg" 
          alt="Background"
          className="absolute w-full h-full object-cover z-5"
          style={{ filter: 'blur(4px)' }}
        />
        
        {/* Video only loaded for higher-end devices */}
        {useVideoBackground && (
          <video 
            className="absolute w-full h-full object-cover z-5" 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="none" // Only load when needed
            style={{ filter: 'blur(4px)' }}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      
      {/* Navbar */}
      <div className="relative z-20 pt-6">
        <Navbar isTransparent={true} />
      </div>
      
      {/* Hero Content */}
      <div className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="container mx-auto relative z-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair"
          >
            Profesjonalne Usługi Sprzątające
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-12 font-montserrat font-light leading-relaxed"
          >
            20 lat doświadczenia w sprzątaniu biurowców, budynków publicznych, mieszkań i domów
            we Wrocławiu i okolicach.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
            {/* "Poznaj Ofertę" button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
            >
              <Link
                to="/oferta"
                className="block w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-center font-montserrat tracking-wide text-lg border border-blue-400/20"
              >
                Poznaj Ofertę
              </Link>
            </motion.div>
            
            {/* "Darmowa Wycena" button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
            >
              <Link
                to="/kontakt"
                className="block w-full backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white font-medium py-4 px-8 rounded-lg border border-white/30 shadow-lg hover:shadow-white/20 transition-all duration-300 text-center font-montserrat tracking-wide text-lg"
              >
                Darmowa Wycena
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;