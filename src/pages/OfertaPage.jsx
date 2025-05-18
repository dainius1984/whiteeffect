import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OfertaPage = () => {
  return (
    <div className="oferta-page">
      <div className="fixed top-0 left-0 right-0 z-40 bg-gray-900 shadow-lg py-3">
        <Navbar />
      </div>
      
      <main className="pt-24">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nasza Oferta</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Profesjonalne usługi sprzątające dostosowane do Twoich potrzeb
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sprzątanie biur i powierzchni komercyjnych</h3>
                <p className="text-gray-600">
                  Regularne sprzątanie biur, budynków użyteczności publicznej i przestrzeni komercyjnych. Dbamy o czystość w miejscu pracy, co przekłada się na komfort i wydajność pracowników.
                </p>
              </div>
              
              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sprzątanie domów i mieszkań</h3>
                <p className="text-gray-600">
                  Kompleksowe lub wybiórcze sprzątanie domów i mieszkań. Zapewniamy dokładne czyszczenie zgodnie z Twoimi wymaganiami, używając bezpiecznych i skutecznych środków czystości.
                </p>
              </div>
              
              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sprzątanie po remontach</h3>
                <p className="text-gray-600">
                  Profesjonalne sprzątanie po remontach i budowach. Usuwamy pozostałości budowlane, kurz i brud, przywracając pomieszczeniom czystość i świeżość.
                </p>
              </div>
              
              {/* Service Card 4 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mycie okien</h3>
                <p className="text-gray-600">
                  Profesjonalne mycie okien w domach, mieszkaniach i budynkach komercyjnych. Używamy specjalistycznego sprzętu i środków, aby zapewnić krystalicznie czyste okna.
                </p>
              </div>
              
              {/* Service Card 5 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Regularne sprzątanie abonamentowe</h3>
                <p className="text-gray-600">
                  Usługi sprzątania w stałych, regularnych terminach. Idealne rozwiązanie dla firm i osób prywatnych, które cenią sobie wygodę i porządek bez wysiłku.
                </p>
              </div>
              
              {/* Service Card 6 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Usługi dodatkowe</h3>
                <p className="text-gray-600">
                  Pranie tapicerki, czyszczenie dywanów, odśnieżanie, sprzątanie terenów zewnętrznych i wiele innych usług dostosowanych do indywidualnych potrzeb klienta.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Wszystkie nasze usługi są dostępne na terenie Wrocławia i okolic, w tym w miejscowościach: Wilkszyn, Pisarzowice, Marszowice i Leśnica.
              </p>
              <a 
                href="/kontakt" 
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Skontaktuj się z nami
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OfertaPage;