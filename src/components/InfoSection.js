import React from 'react';

const InfoSection = () => {
  const services = [
    {
      id: 1,
      title: 'Sprzątanie Biurowców',
      description: 'Profesjonalne usługi sprzątania biurowców i powierzchni komercyjnych, zapewniające czyste i reprezentacyjne miejsce pracy.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Sprzątanie Budynków Publicznych',
      description: 'Kompleksowe usługi utrzymania czystości w urzędach, szkołach i innych obiektach użyteczności publicznej.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Sprzątanie Mieszkań i Domów',
      description: 'Profesjonalne usługi sprzątania mieszkań i domów prywatnych, dostosowane do indywidualnych potrzeb klientów.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Usługi Specjalistyczne',
      description: 'Mycie okien, pranie wykładzin i tapicerek, czyszczenie po remontach i inne specjalistyczne usługi sprzątające.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const locations = [
    { id: 1, name: 'Wrocław' },
    { id: 2, name: 'Wilkszyn' },
    { id: 3, name: 'Pisarzowice' },
    { id: 4, name: 'Marszowice' },
    { id: 5, name: 'Leśnica' },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nasze Usługi</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Firma WhiteEffect oferuje solidne, kompleksowe usługi sprzątające najwyższej jakości we Wrocławiu i okolicach. 
            Dzięki 20-letniemu doświadczeniu gwarantujemy profesjonalizm i niezawodność.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 mb-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Gdzie Działamy?</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Świadczymy profesjonalne usługi we Wrocławiu oraz okolicach, w tym w Wilkszynie, Pisarzowicach, Marszowicach i Leśnicy.
          </p>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            Zamów Usługę
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoSection; 