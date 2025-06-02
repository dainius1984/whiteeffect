import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OfertaIndywidualna from '../components/OfertaIndywidualna';
import OfertaDlaFirm from '../components/OfertaDlaFirm';

const OfertaPage = () => {
  const [activeOffer, setActiveOffer] = useState('individual'); // 'individual' or 'business'

  return (
    <div className="oferta-page">
      <div className="fixed top-0 left-0 right-0 z-40 bg-gray-900 shadow-lg py-3">
        <Navbar />
      </div>
      
      <main className="pt-24">
        {/* Toggle Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Nasza Oferta</h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 px-4">
                Profesjonalne usługi sprzątające dostosowane do różnych potrzeb
              </p>
              
              {/* Desktop Toggle Buttons */}
              <div className="hidden md:flex justify-center mb-8">
                <div className="relative bg-white p-2 rounded-2xl shadow-lg border border-gray-100 inline-flex">
                  {/* Sliding background indicator */}
                  <div 
                    className={`absolute top-2 bottom-2 w-1/2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-md transform transition-transform duration-300 ease-in-out ${
                      activeOffer === 'business' ? 'translate-x-full' : 'translate-x-0'
                    }`}
                  />
                  
                  <button
                    onClick={() => setActiveOffer('individual')}
                    className={`relative z-10 px-6 lg:px-8 py-4 rounded-xl font-semibold transition-all duration-300 min-w-[180px] lg:min-w-[200px] ${
                      activeOffer === 'individual'
                        ? 'text-white'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <div className={`p-2 rounded-lg transition-colors duration-300 ${
                        activeOffer === 'individual' 
                          ? 'bg-white bg-opacity-20' 
                          : 'bg-blue-50'
                      }`}>
                        <svg className={`w-5 h-5 lg:w-6 lg:h-6 transition-colors duration-300 ${
                          activeOffer === 'individual' ? 'text-white' : 'text-blue-600'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-base lg:text-lg font-bold">Oferta Indywidualna</div>
                        <div className={`text-sm transition-colors duration-300 ${
                          activeOffer === 'individual' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          Domy i mieszkania
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setActiveOffer('business')}
                    className={`relative z-10 px-6 lg:px-8 py-4 rounded-xl font-semibold transition-all duration-300 min-w-[180px] lg:min-w-[200px] ${
                      activeOffer === 'business'
                        ? 'text-white'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <div className={`p-2 rounded-lg transition-colors duration-300 ${
                        activeOffer === 'business' 
                          ? 'bg-white bg-opacity-20' 
                          : 'bg-blue-50'
                      }`}>
                        <svg className={`w-5 h-5 lg:w-6 lg:h-6 transition-colors duration-300 ${
                          activeOffer === 'business' ? 'text-white' : 'text-blue-600'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-base lg:text-lg font-bold">Oferta dla Firm</div>
                        <div className={`text-sm transition-colors duration-300 ${
                          activeOffer === 'business' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          Biura i budynki
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Mobile Toggle Buttons */}
              <div className="md:hidden mb-8 px-4">
                <div className="flex flex-col space-y-3 max-w-sm mx-auto">
                  <button
                    onClick={() => setActiveOffer('individual')}
                    className={`w-full p-4 rounded-xl font-semibold transition-all duration-300 shadow-md border-2 ${
                      activeOffer === 'individual'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-600 shadow-lg transform scale-105'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <div className={`p-2 rounded-lg transition-colors duration-300 ${
                        activeOffer === 'individual' 
                          ? 'bg-white bg-opacity-20' 
                          : 'bg-blue-50'
                      }`}>
                        <svg className={`w-6 h-6 transition-colors duration-300 ${
                          activeOffer === 'individual' ? 'text-white' : 'text-blue-600'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-lg font-bold">Oferta Indywidualna</div>
                        <div className={`text-sm transition-colors duration-300 ${
                          activeOffer === 'individual' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          Domy i mieszkania
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setActiveOffer('business')}
                    className={`w-full p-4 rounded-xl font-semibold transition-all duration-300 shadow-md border-2 ${
                      activeOffer === 'business'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-600 shadow-lg transform scale-105'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <div className={`p-2 rounded-lg transition-colors duration-300 ${
                        activeOffer === 'business' 
                          ? 'bg-white bg-opacity-20' 
                          : 'bg-blue-50'
                      }`}>
                        <svg className={`w-6 h-6 transition-colors duration-300 ${
                          activeOffer === 'business' ? 'text-white' : 'text-blue-600'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-lg font-bold">Oferta dla Firm</div>
                        <div className={`text-sm transition-colors duration-300 ${
                          activeOffer === 'business' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          Biura i budynki
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Additional info cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
                <div className="bg-white p-4 md:p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">20 lat doświadczenia</h3>
                  <p className="text-gray-600 text-sm">Zaufało nam już tysiące klientów</p>
                </div>
                
                <div className="bg-white p-4 md:p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Dostępni 7 dni w tygodniu</h3>
                  <p className="text-gray-600 text-sm">Elastyczne terminy i godziny</p>
                </div>
                
                <div className="bg-white p-4 md:p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Bezpłatna wycena</h3>
                  <p className="text-gray-600 text-sm">Skontaktuj się z nami już dziś</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="transition-all duration-500 ease-in-out">
          {activeOffer === 'individual' ? <OfertaIndywidualna /> : <OfertaDlaFirm />}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OfertaPage;