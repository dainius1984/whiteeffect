import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isTransparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();

  // Set active link based on current path
  useEffect(() => {
    if (location.pathname === '/') setActiveLink('home');
    else if (location.pathname === '/oferta') setActiveLink('services');
    else if (location.pathname === '/o-nas') setActiveLink('about');
    else if (location.pathname === '/kontakt') setActiveLink('contact');
  }, [location.pathname]);

  // For homepage, also update active link on scroll
  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const sections = ['home', 'services', 'about', 'contact'];
        
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveLink(sectionId);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [location.pathname]);

  return (
    <nav className="w-full px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-3">
            <img 
              src="/img/logo.png" 
              alt="WhiteEffect Logo" 
              className="w-12 h-12" 
              width="48" 
              height="48"
              loading="eager"
              fetchpriority="high"
            />
          </div>
          <Link to="/" className="text-3xl font-bold text-white font-playfair tracking-wider">
            White<span className="text-blue-300">Effect</span>
          </Link>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-10">
          <div className="relative group">
            <Link
              to="/"
              className={`text-lg text-white hover:text-blue-200 transition duration-300 font-montserrat font-medium tracking-wide py-2 block ${activeLink === 'home' ? 'text-blue-200' : ''}`}
              onClick={() => setActiveLink('home')}
            >
              Strona główna
            </Link>
            <span 
              className={`absolute left-0 bottom-0 h-0.5 bg-blue-300 transition-all duration-300 ease-in-out group-hover:w-full ${activeLink === 'home' ? 'w-full' : 'w-0'}`}
            ></span>
          </div>
          
          <div className="relative group">
            <Link
              to="/oferta"
              className={`text-lg text-white hover:text-blue-200 transition duration-300 font-montserrat font-medium tracking-wide py-2 block ${activeLink === 'services' ? 'text-blue-200' : ''}`}
              onClick={() => setActiveLink('services')}
            >
              Usługi
            </Link>
            <span 
              className={`absolute left-0 bottom-0 h-0.5 bg-blue-300 transition-all duration-300 ease-in-out group-hover:w-full ${activeLink === 'services' ? 'w-full' : 'w-0'}`}
            ></span>
          </div>
          
          <div className="relative group">
            <Link
              to="/o-nas"
              className={`text-lg text-white hover:text-blue-200 transition duration-300 font-montserrat font-medium tracking-wide py-2 block ${activeLink === 'about' ? 'text-blue-200' : ''}`}
              onClick={() => setActiveLink('about')}
            >
              O nas
            </Link>
            <span 
              className={`absolute left-0 bottom-0 h-0.5 bg-blue-300 transition-all duration-300 ease-in-out group-hover:w-full ${activeLink === 'about' ? 'w-full' : 'w-0'}`}
            ></span>
          </div>
          
          <div className="relative group">
            <Link
              to="/kontakt"
              className={`text-lg text-white hover:text-blue-200 transition duration-300 font-montserrat font-medium tracking-wide py-2 block ${activeLink === 'contact' ? 'text-blue-200' : ''}`}
              onClick={() => setActiveLink('contact')}
            >
              Kontakt
            </Link>
            <span 
              className={`absolute left-0 bottom-0 h-0.5 bg-blue-300 transition-all duration-300 ease-in-out group-hover:w-full ${activeLink === 'contact' ? 'w-full' : 'w-0'}`}
            ></span>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-blue-200 focus:outline-none"
            aria-label="Toggle menu"
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
            <Link
              to="/"
              className={`text-lg hover:text-blue-200 transition duration-300 font-montserrat font-medium ${activeLink === 'home' ? 'text-blue-200' : 'text-white'}`}
              onClick={() => {
                setActiveLink('home');
                setIsMenuOpen(false);
              }}
            >
              Strona główna
            </Link>
            <Link
              to="/oferta"
              className={`text-lg hover:text-blue-200 transition duration-300 font-montserrat font-medium ${activeLink === 'services' ? 'text-blue-200' : 'text-white'}`}
              onClick={() => {
                setActiveLink('services');
                setIsMenuOpen(false);
              }}
            >
              Usługi
            </Link>
            <Link
              to="/o-nas"
              className={`text-lg hover:text-blue-200 transition duration-300 font-montserrat font-medium ${activeLink === 'about' ? 'text-blue-200' : 'text-white'}`}
              onClick={() => {
                setActiveLink('about');
                setIsMenuOpen(false);
              }}
            >
              O nas
            </Link>
            <Link
              to="/kontakt"
              className={`text-lg hover:text-blue-200 transition duration-300 font-montserrat font-medium ${activeLink === 'contact' ? 'text-blue-200' : 'text-white'}`}
              onClick={() => {
                setActiveLink('contact');
                setIsMenuOpen(false);
              }}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;