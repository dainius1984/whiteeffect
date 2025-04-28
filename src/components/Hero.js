import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <video 
          className="absolute w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center mt-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
          Profesjonalne Usługi Sprzątające
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10 font-montserrat font-light leading-relaxed">
          20 lat doświadczenia w sprzątaniu biurowców, budynków publicznych, mieszkań i domów
          we Wrocławiu i okolicach.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 text-center font-montserrat tracking-wide"
          >
            Nasze Usługi
          </a>
          <a
            href="#contact"
            className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white font-medium py-3 px-8 rounded-lg border border-white transition duration-300 text-center font-montserrat tracking-wide"
          >
            Darmowa Wycena
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 