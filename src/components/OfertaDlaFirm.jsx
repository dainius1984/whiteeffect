import React from 'react';
import Contact from './Contact';

const OfertaDlaFirm = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Oferta dla Firm</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Profesjonalne usługi sprzątające dla biznesu - Twój partner w utrzymaniu najwyższych standardów czystości
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto mb-12">
          {/* Introduction */}
          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Z przyjemnością przedstawiamy <strong>WhiteEffect</strong> – lidera w dostarczaniu profesjonalnych usług sprzątających dla biznesu. 
              Jesteśmy partnerem, na którym możesz polegać, oferując kompleksowe rozwiązania w zakresie utrzymania czystości w obiektach komercyjnych, 
              placówkach medycznych, szkołach, przedszkolach oraz nieruchomościach mieszkalnych – od pojedynczych mieszkań po całe osiedla.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Nasze wieloletnie doświadczenie, zaawansowane technologie i indywidualne podejście do każdego klienta gwarantują usługi na najwyższym poziomie, 
              idealnie dopasowane do specyficznych potrzeb Twojej firmy.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Kompleksowe sprzątanie obiektów komercyjnych</h4>
                <p className="text-gray-600">
                  Dbamy o nieskazitelną czystość biur, hal produkcyjnych, przestrzeni handlowych i innych obiektów, 
                  wzmacniając profesjonalny wizerunek Twojej marki.
                </p>
              </div>
              
              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Usługi specjalistyczne</h4>
                <p className="text-gray-600">
                  Sprzątanie poremontowe, ozonowanie i jonizacja pomieszczeń, zapewniające higieniczne 
                  i wolne od alergenów środowisko pracy dla Twoich pracowników.
                </p>
              </div>
              
              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Dostawa profesjonalnych środków czystości</h4>
                <p className="text-gray-600">
                  Zapewniamy dostęp do ekologicznych, wysokiej jakości produktów, które gwarantują 
                  długotrwałą czystość i bezpieczeństwo dla użytkowników.
                </p>
              </div>
              
              {/* Service Card 4 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Zaawansowany sprzęt sprzątający</h4>
                <p className="text-gray-600">
                  Wykorzystujemy nowoczesne technologie, takie jak maszyny parowe, odkurzacze przemysłowe 
                  i urządzenia do jonizacji, aby zapewnić maksymalną efektywność i precyzję.
                </p>
              </div>
              
              {/* Service Card 5 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Usługi dostosowane do potrzeb biznesu</h4>
                <p className="text-gray-600">
                  Od jednorazowych zleceń po długoterminowe kontrakty – tworzymy elastyczne plany sprzątania, 
                  które wspierają codzienne funkcjonowanie Twojej firmy.
                </p>
              </div>
              
              {/* Service Card 6 */}
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Sprzątanie placówek edukacyjnych i medycznych</h4>
                <p className="text-gray-600">
                  Specjalistyczne usługi dla szkół, przedszkoli, przychodni i placówek medycznych 
                  z zachowaniem najwyższych standardów higieny i bezpieczeństwa.
                </p>
              </div>
            </div>
          </div>
          
          {/* Why choose us */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Dlaczego warto wybrać WhiteEffect?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-200 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Bogate doświadczenie międzynarodowe</h4>
                    <p className="text-gray-600">
                      Nasz zespół z powodzeniem realizował projekty w Polsce i za granicą, w tym w norweskich szkołach 
                      i przedszkolach oraz w prestiżowych obiektach, takich jak Eter, Metropolis czy Hala Ludowa.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-200 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Indywidualne podejście do każdego klienta</h4>
                    <p className="text-gray-600">
                      Każdej firmie przypisujemy dedykowanego koordynatora, który nadzoruje pracę zespołu sprzątającego, 
                      dba o jakość usług i zapewnia płynną komunikację.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-200 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Maksymalna elastyczność i dostępność</h4>
                    <p className="text-gray-600">
                      Pracujemy 7 dni w tygodniu, w tym w godzinach nocnych, dostosowując się do harmonogramu 
                      Twojej firmy, aby nie zakłócać jej codziennej działalności.
                    </p>
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
                    <h4 className="font-semibold text-gray-800 mb-2">Pełne bezpieczeństwo i zaufanie</h4>
                    <p className="text-gray-600">
                      Posiadamy pełne ubezpieczenie od odpowiedzialności cywilnej, które obejmuje cały zakres 
                      naszych usług, dając Ci pewność, że Twój biznes jest w dobrych rękach.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-200 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Ekologiczne i nowoczesne podejście</h4>
                    <p className="text-gray-600">
                      Stosujemy przyjazne dla środowiska środki czystości i najnowsze technologie, 
                      które minimalizują wpływ na środowisko przy maksymalnej efektywności.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-200 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Długoterminowe partnerstwo</h4>
                    <p className="text-gray-600">
                      Nie jesteśmy tylko usługodawcą – jesteśmy Twoim partnerem biznesowym, który wspiera 
                      rozwój Twojej firmy poprzez zapewnienie najwyższych standardów czystości.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Gotowy na współpracę?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś, aby omówić indywidualną ofertę dostosowaną do potrzeb Twojej firmy. 
              Zapewniamy profesjonalne doradztwo i bezpłatną wycenę usług.
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

export default OfertaDlaFirm; 