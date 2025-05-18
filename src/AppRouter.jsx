import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OfertaPage from './pages/OfertaPage';
import KontaktPage from './pages/KontaktPage';  // Fixed the path here

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="o-nas" element={<AboutPage />} />
          <Route path="oferta" element={<OfertaPage />} />
          <Route path="kontakt" element={<KontaktPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;