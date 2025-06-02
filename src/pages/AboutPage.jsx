import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-gray-900 shadow-lg py-3">
        <Navbar />
      </div>

      <main className="pt-24">
        {/* Hero Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O Nas</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Firma WhiteEffect to 20 lat doświadczenia w profesjonalnym sprzątaniu na terenie Wrocławia i okolic. Poznaj naszą historię i wartości!
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <p className="text-gray-600 mb-4">
                  Od 20 lat świadczymy najwyższej jakości usługi sprzątające dla biurowców, budynków publicznych, domów i mieszkań prywatnych we Wrocławiu.
                </p>
                <p className="text-gray-600 mb-4">
                  Nasz zespół składa się z doświadczonych i wykwalifikowanych pracowników, którzy dbają o każdy szczegół podczas sprzątania. Używamy tylko profesjonalnych środków czyszczących, które są skuteczne, bezpieczne dla ludzi oraz przyjazne dla środowiska.
                </p>
                <p className="text-gray-600 mb-4">
                  Zaufanie, jakie otrzymujemy od klientów indywidualnych i instytucji publicznych, wynika z naszej niezawodności, punktualności i nieustającej dbałości o najwyższe standardy czystości.
                </p>
                <p className="text-gray-600">
                  <strong>Obszar działania:</strong> Oferujemy profesjonalne usługi sprzątające w następujących lokalizacjach: Wrocław, Wilkszyn, Pisarzowice, Marszowice oraz Leśnica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section 
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nasza Historia</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Poznaj drogę, którą przeszliśmy, by stać się liderem w branży sprzątającej.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
              <div className="md:w-1/2">
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-4">
                  <p className="text-gray-500">Placeholder for Image 1 (e.g., Founding Moment)</p>
                </div>
                <p className="text-gray-600 mb-4">
                  WhiteEffect powstało w 2005 roku z pasji do tworzenia czystych i zdrowych przestrzeni. Założyciel, Jan Kowalski, zaczął od sprzątania małych mieszkań w centrum Wrocławia, wykorzystując jedynie podstawowe narzędzia i ogromne zaangażowanie. Z czasem, dzięki ciężkiej pracy i pozytywnym rekomendacjom, firma rozrosła się, obejmując coraz większe kontrakty.
                </p>
                <p className="text-gray-600">
                  Dziś jesteśmy dumni z każdego klienta, którego obsługujemy, i nieustannie dążymy do doskonalenia naszych usług, łącząc tradycję z nowoczesnymi technologiami.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-4">
                  <p className="text-gray-500">Placeholder for Image 2 (e.g., Team at Work)</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;