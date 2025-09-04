import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { ContactForm } from './ContactForm';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Proste tło wideo */}
      <div className="absolute inset-0 z-0">
        {/* Nakładka ciemności */}
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        
        {/* Wideo */}
        <video 
          className="absolute w-full h-full object-cover z-5" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Navbar - w tym przypadku nie ma fixed, bo jest wewnątrz Hero */}
      <div className="relative z-20 py-3">
        <Navbar isTransparent={true} />
      </div>
      
      {/* Treść Hero */}
      <div className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="container mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Lewa strona - Tekst */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
                Profesjonalne Usługi Sprzątające
              </h1>
              
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto lg:mx-0 mb-12 font-montserrat font-light leading-relaxed">
                20 lat doświadczenia w sprzątaniu biurowców, budynków publicznych, mieszkań i domów
                we Wrocławiu i okolicach.
              </p>
              
              {/* Przyciski */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 max-w-2xl mx-auto lg:mx-0">
                <Link
                  to="/oferta"
                  className="flex-1 block w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 text-center font-montserrat tracking-wide text-lg border border-blue-400/20"
                >
                  Poznaj Ofertę
                </Link>
                
                <Link
                  to="/kontakt"
                  className="flex-1 block w-full bg-white/10 hover:bg-white/20 text-white font-medium py-4 px-8 rounded-lg border border-white/30 shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 text-center font-montserrat tracking-wide text-lg"
                >
                  Więcej Informacji
                </Link>
              </div>
            </div>
            
            {/* Prawa strona - Formularz kontaktowy */}
            <div className="flex justify-center lg:justify-end">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;