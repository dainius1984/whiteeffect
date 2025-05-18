import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} WhiteEffect | Wrocław. Wszelkie prawa zastrzeżone.</p>
        <p className="mt-2 text-sm text-gray-400">Profesjonalne usługi sprzątające: Wrocław, Wilkszyn, Pisarzowice, Marszowice, Leśnica</p>
      </div>
    </footer>
  );
};

export default Footer;