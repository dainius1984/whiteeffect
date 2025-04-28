import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo/Icon placeholder */}
          <div className="mr-3 text-white">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <span className="text-3xl font-bold text-white font-playfair tracking-wider">
            White<span className="text-blue-300">Effect</span>
          </span>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-10">
          <a href="#home" className="text-lg text-white hover:text-blue-200 transition duration-300 font-montserrat font-medium tracking-wide">Strona główna</a>
          <a href="#services" className="text-lg text-white hover:text-blue-200 transition duration-300 font-montserrat font-medium tracking-wide">Usługi</a>
          <a href="#about" className="text-lg text-white hover:text-blue-200 transition duration-300 font-montserrat font-medium tracking-wide">O nas</a>
          <a href="#contact" className="text-lg text-white hover:text-blue-200 transition duration-300 font-montserrat font-medium tracking-wide">Kontakt</a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-blue-200 focus:outline-none"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 bg-black bg-opacity-75 rounded-lg">
          <div className="flex flex-col space-y-4 px-6 pb-4">
            <a href="#home" className="text-lg text-white hover:text-blue-200 transition duration-300 font-montserrat font-medium">Strona główna</a>
            <a href="#services" className="text-lg text-white hover:text-blue-200 transition duration-300 font-montserrat font-medium">Usługi</a>
            <a href="#about" className="text-lg text-white hover:text-blue-200 transition duration-300 font-montserrat font-medium">O nas</a>
            <a href="#contact" className="text-lg text-white hover:text-blue-200 transition duration-300 font-montserrat font-medium">Kontakt</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 