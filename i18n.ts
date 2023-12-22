import { default as i18next } from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { en, ru, ua } from './locales';
import { storageHelper } from './src/shared/helpers';

const defaultNS = 'ru';

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    cache: ['localstorage'],
    cleanCode: true,
    compatibilityJSON: 'v4',
    debug: process.env.NODE_ENV === 'development',
    // defaultNS,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
    keySeparator: '.',
    lowerCaseLng: true,
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
    saveMissing: true,
    supportedLngs: ['ru', 'ua', 'en'],
    updateMissing: true,
  });

i18next.on('languageChanged', () => {
  storageHelper('local').set('lng', i18next.language);
});

export { defaultNS };
export default i18next;
