'use client'
import Navbar from '@/components/navbar'
import './globals.css'
import Footer from '@/components/footer'
import '../i18n';
import { I18nContext } from "./context";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';

export default function RootLayout({ children }) {
  const { i18n, t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const lastVisit = getCookie('lastVisit');
    const defaultLanguage = getCookie('defaultLanguage');
    const oneHour = 60 * 60 * 1000; // milliseconds in one hour
    if (!lastVisit || Date.now() - new Date(lastVisit).getTime() > oneHour) {
      fetch('https://dcpcr-ews-api.grevity.in/schemes/increment-visit') // Replace with your server's endpoint
        .then(response => response.json())
        .then(data => {
          if (data) {
            setCookie("lastVisit", new Date().toISOString(), { path: '/', maxAge: 3600 });
          }
        });
    }


    if (!defaultLanguage) {
      setShowModal(true);
    } else {
      i18n.changeLanguage(defaultLanguage);
    }
  }, []);

  return (
    <html>
      <body>
        {showModal && <DefaultLanguageModal closeModal={() => setShowModal(false)} i18n={i18n} />}

        <Navbar />
        <I18nContext.Provider value={{ i18n, t }}>
          {children}
        </I18nContext.Provider>
        <Footer />
      </body>
    </html>
  )
}


export const DefaultLanguageModal = ({ i18n, closeModal }) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-12">
      <div className="max-h-full w-full max-w-xl overflow-y-auto bg-white rounded-2xl px-6">
        <div className="w-full">
          <div className="xl:my-20 lg:my-20 md:my-20 my-10 max-w-[400px] mx-auto">
            <div className="mb-8">
              <h1 className="mb-4 text-xl lg:text-3xl md:text-3xl font-extrabold" style={{ marginBottom: 0 }}>Choose language</h1>
              <h1 className="mb-4 text-xl lg:text-3xl md:text-3xl font-extrabold">भाषा चुनें</h1>
              <p className="text-gray-600 text-sm" style={{ marginBottom: 8 }}>Please choose a default language in which you want to view the website</p>
              <p className="text-gray-600 text-sm">कृपया वह डिफ़ॉल्ट भाषा चुनें जिसमें आप वेबसाइट देखना चाहते हैं</p>
            </div>
            <div className="space-y-4">
              <button className="p-3 bg-iceland_poppy-500 rounded-full text-white w-full font-semibold text-sm lg:text-md md:text-md" onClick={() => {
                i18n.changeLanguage('en')
                setCookie("defaultLanguage", 'en', { path: '/', maxAge: 86400 });
                closeModal();
              }}>Continue in English</button>
              <button className="p-3 bg-white text-iceland_poppy-500 border rounded-full w-full font-semibold text-sm lg:text-md md:text-md" onClick={() => {
                i18n.changeLanguage('hi')
                setCookie("defaultLanguage", 'hi', { path: '/', maxAge: 86400 });
                closeModal();
              }} style={{ borderColor: "#e4750a" }}>हिंदी में जारी रखें</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}