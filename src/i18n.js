// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation not found
    debug: true,
    backend: {
      loadPath: 'https://localhost:9040/api/locale/keys', // API endpoint to fetch translations
      parse: (data) => {
        const parsedData = JSON.parse(data);

        console.log('parsedData:', parsedData);
        
        const translations = {};
        parsedData.data.forEach((item) => {
          translations[item.key] = item.value;
        });

        return translations;
      },
    },
  });

export default i18n;
