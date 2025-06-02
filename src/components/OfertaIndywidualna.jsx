import React from 'react';
import Contact from './Contact';

const OfertaIndywidualna = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Oferta Indywidualna</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Profesjonalne usługi sprzątające dostosowane do potrzeb domów i mieszkań prywatnych
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto mb-12">
          {/* Introduction */}
          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Zapraszamy do skorzystania z profesjonalnych usług sprzątających WhiteEffect, dedykowanych klientom indywidualnym. 
              Oferujemy kompleksowe rozwiązania dla Twojego domu lub mieszkania, dostosowane do Twoich potrzeb i harmonogramu. 
              Nasze wieloletnie doświadczenie i profesjonalne podejście gwarantują najwyższą jakość usług.
            </p>
          </div>
          
          {/* What we offer */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Co oferujemy?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Sprzątanie domów i mieszkań</h4>
                <p className="text-gray-600">
                  Kompleksowe sprzątanie wszystkich pomieszczeń w domu lub mieszkaniu. Obejmuje mycie podłóg, odkurzanie, 
                  wycieranie kurzu, czyszczenie łazienek i kuchni oraz wszystkie inne czynności potrzebne do utrzymania czystości.
                </p>
              </div>
              
              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Sprzątanie regularne</h4>
                <p className="text-gray-600">
                  Stałe, cykliczne sprzątanie Twojego domu lub mieszkania w ustalonych terminach - tygodniowo, 
                  co dwa tygodnie lub miesięcznie. Idealne rozwiązanie dla zapracowanych osób.
                </p>
              </div>
              
              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Mycie okien</h4>
                <p className="text-gray-600">
                  Profesjonalne mycie okien w domach i mieszkaniach. Zapewniamy krystalicznie czyste okna 
                  bez smug, używając specjalistycznych środków i narzędzi.
                </p>
              </div>
              
              {/* Service Card 4 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Sprzątanie po remontach</h4>
                <p className="text-gray-600">
                  Profesjonalne sprzątanie po zakończonych remontach i pracach budowlanych. 
                  Usuwamy kurz budowlany, pozostałości po pracach i przywracamy mieszkaniu świeżość.
                </p>
              </div>
              
              {/* Service Card 5 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Pranie tapicerki i dywanów</h4>
                <p className="text-gray-600">
                  Głębokie czyszczenie mebli tapicerowanych, dywanów i wykładzin przy użyciu 
                  profesjonalnych środków i sprzętu. Usuwamy plamy, kurz i alergeny.
                </p>
              </div>
              
              {/* Service Card 6 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Sprzątanie przed wydarzeniami</h4>
                <p className="text-gray-600">
                  Specjalne sprzątanie przygotowujące Twój dom na ważne wydarzenia, przyjęcia czy wizyty gości. 
                  Dbamy o każdy szczegół, aby wszystko było perfekcyjnie czyste.
                </p>
              </div>
            </div>
          </div>
          
          {/* Why choose us */}
          <div className="bg-blue-50 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Dlaczego warto wybrać nasze usługi?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-200 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Elastyczność terminów</h4>
                    <p className="text-gray-600">Dostosowujemy się do Twojego harmonogramu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-200 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Bezpieczne środki</h4>
                    <p className="text-gray-600">Używamy ekologicznych i bezpiecznych produktów</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-200 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Doświadczony zespół</h4>
                    <p className="text-gray-600">20 lat doświadczenia w branży sprzątającej</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-200 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Konkurencyjne ceny</h4>
                    <p className="text-gray-600">Wysokiej jakości usługi w przystępnych cenach</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-200 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Indywidualne podejście</h4>
                    <p className="text-gray-600">Każde zlecenie traktujemy priorytetowo</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-200 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Gwarancja jakości</h4>
                    <p className="text-gray-600">100% satysfakcji lub ponawiamy usługę za darmo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Skontaktuj się z nami</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Zamów profesjonalne sprzątanie swojego domu lub mieszkania już dziś. 
              Zapewniamy bezpłatną wycenę i elastyczne terminy dopasowane do Twoich potrzeb.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontakt" 
                className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Bezpłatna wycena
              </a>
              <a 
                href="tel:+48123456789" 
                className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Zadzwoń teraz
              </a>
            </div>
          </div>
        </div>
        
        <Contact />
      </div>
    </section>
  );
};

export default OfertaIndywidualna; 