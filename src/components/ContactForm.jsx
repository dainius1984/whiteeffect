import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_PUBLIC_KEY = "0f8Jce-Gsw4GbjCQ_";
const EMAILJS_SERVICE_ID = "service_m4uai4d";
const EMAILJS_TEMPLATE_ID = "template_r7rcz39";

emailjs.init(EMAILJS_PUBLIC_KEY);

export const ContactForm = ({ onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Proszę uzupełnić wymagane pola.');
      return;
    }
    setSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          title: 'Konsultacje',
          name: form.name,
          time: new Date().toLocaleString(),
          message: form.message + (form.phone ? `\n\nTelefon: ${form.phone}` : ''),
          email: form.email,
          to_email: 'whiteeffect.kontakt@gmail.com'
        }
      );
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
        if (onClose) onClose();
      }, 3000);
    } catch (err) {
      setError('Przepraszamy, wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-100 text-green-800 p-6 rounded-xl text-center font-semibold shadow-lg border border-green-200">
        <div className="flex items-center justify-center mb-2">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Dziękujemy za kontakt!
        </div>
        <p className="text-sm">Odpowiemy najszybciej jak to możliwe.</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center font-playfair">
        Darmowa Wycena
      </h3>
      <p className="text-gray-600 text-center mb-6 font-montserrat">
        Skontaktuj się z nami, aby otrzymać bezpłatną wycenę
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg border border-red-200 text-sm">
            {error}
          </div>
        )}
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
            Imię i nazwisko *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-montserrat"
            placeholder="Twoje imię i nazwisko"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-montserrat"
            placeholder="Twój e-mail"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-montserrat"
            placeholder="Twój numer telefonu (opcjonalnie)"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
            Wiadomość *
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-[100px] resize-none font-montserrat"
            placeholder="Opisz swoje potrzeby sprzątania..."
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={submitting}
          className={`w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 font-montserrat tracking-wide ${
            submitting ? 'opacity-70 cursor-wait' : ''
          }`}
        >
          {submitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Wysyłanie...
            </div>
          ) : (
            'Wyślij wiadomość'
          )}
        </button>
      </form>
    </div>
  );
};
