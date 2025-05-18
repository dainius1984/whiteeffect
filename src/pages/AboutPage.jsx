import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Zaktualizowany kontener Navbar - dokładnie taki sam jak na innych stronach */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-gray-900 shadow-lg py-3">
        <Navbar />
      </div>
      
      <main className="pt-24">
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
                <p className="text-gray-600 mb-4">
                  Zaufało nam już wielu klientów indywidualnych oraz instytucji publicznych, dzięki naszej niezawodności, punktualności i dbałości o najwyższe standardy czystości.
                </p>
                <p className="text-gray-600">
                  <strong>Obszar działania:</strong> Oferujemy profesjonalne usługi sprzątające w następujących lokalizacjach: Wrocław, Wilkszyn, Pisarzowice, Marszowice oraz Leśnica.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;