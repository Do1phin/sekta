import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { en, ru, ua } from './locales';

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v4',
    cleanCode: true,
    debug: process.env.NODE_ENV === 'development',
    defaultNS: ['translations'],
    fallbackLng: 'ru',
    ns: ['translations'],
    resources: {
      en: {
        translations: en,
      },
      ru: {
        translations: ru,
      },
      ua: {
        translations: ua,
      },
    },
    keySeparator: '.',
    lowerCaseLng: true,
    supportedLngs: ['ru', 'ua', 'en'],
    saveMissing: true,
    updateMissing: true,
  });

export default i18next;
