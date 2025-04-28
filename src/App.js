import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg py-3' : 'bg-transparent py-4'}`}>
        <Navbar />
      </div>
      <main>
        <Hero />
        <InfoSection />
        
        {/* Adding About Us section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O Nas</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Firma WhiteEffect to 20 lat doświadczenia w profesjonalnym sprzątaniu na terenie Wrocławia i okolic.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <p className="text-gray-600 mb-4">
                  Od 20 lat świadczymy najwyższej jakości usługi sprzątające dla biurowców, budynków publicznych oraz domów i mieszkań prywatnych we Wrocławiu.
                </p>
                <p className="text-gray-600 mb-4">
                  Nasz zespół składa się z doświadczonych i wykwalifikowanych pracowników, którzy dbają o każdy szczegół podczas sprzątania. Używamy tylko profesjonalnych środków czyszczących, które są skuteczne i bezpieczne dla ludzi oraz środowiska.
                </p>
                <p className="text-gray-600">
                  Zaufało nam już wielu klientów indywidualnych oraz instytucji publicznych, dzięki naszej niezawodności, punktualności i dbałości o najwyższe standardy czystości.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact section */}
        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Skontaktuj się z nami</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Zadzwoń lub napisz, aby otrzymać bezpłatną wycenę dla Twojego biura, budynku lub domu.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Dane kontaktowe</h3>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +48 123 456 789
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    kontakt@whiteeffect.pl
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    ul. Przykładowa 123, 50-001 Wrocław
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <a href="https://whiteeffect.pl" className="hover:text-blue-600 transition-colors">www.whiteeffect.pl</a>
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Godziny pracy</h3>
                <div className="space-y-3">
                  <p className="flex justify-between text-gray-600">
                    <span>Poniedziałek - Piątek:</span>
                    <span>8:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between text-gray-600">
                    <span>Sobota:</span>
                    <span>9:00 - 14:00</span>
                  </p>
                  <p className="flex justify-between text-gray-600">
                    <span>Niedziela:</span>
                    <span>Zamknięte</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} WhiteEffect | Wrocław. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
