import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Proste tło wideo lub statyczne tło na mobile */}
      <div className="absolute inset-0 z-0">
        {/* Nakładka ciemności */}
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        
        {!isMobile ? (
          /* Wideo tylko na desktop - optimized for performance */
          <video 
            className="absolute w-full h-full object-cover z-5" 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000000' width='1920' height='1080'/%3E%3C/svg%3E"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          /* Statyczne czarne tło na mobile - much faster */
          <div className="absolute w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 z-5"></div>
        )}
      </div>
      
      {/* Navbar - w tym przypadku nie ma fixed, bo jest wewnątrz Hero */}
      <div className="relative z-20 py-3">
        <Navbar isTransparent={true} />
      </div>
      
      {/* Treść Hero */}
      <div className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="container mx-auto relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair" style={{ contentVisibility: 'auto' }}>
            Profesjonalne Usługi Sprzątające
          </h1>
          
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-12 font-montserrat font-light leading-relaxed" style={{ contentVisibility: 'auto' }}>
            20 lat doświadczenia w sprzątaniu biurowców, budynków publicznych, mieszkań i domów
            we Wrocławiu i okolicach.
          </p>
          
          {/* Przyciski */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
            <Link
              to="/oferta"
              className="flex-1 block w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 text-center font-montserrat tracking-wide text-lg border border-blue-400/20"
            >
              Poznaj Ofertę
            </Link>
            
            <button
              onClick={() => window.openContactModal?.()}
              className="flex-1 block w-full bg-white/10 hover:bg-white/20 text-white font-medium py-4 px-8 rounded-lg border border-white/30 shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 text-center font-montserrat tracking-wide text-lg"
            >
              Darmowa Wycena
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;