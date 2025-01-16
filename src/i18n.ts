import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { SupportLanguages } from './enum/index.ts'

import translationEN from "./translations/en.json";
import translationES from "./translations/es.json";
import translationGL from "./translations/gl.json";


const resources = {
  en: { translation: translationEN},
  es: { translation: translationES},
  gl: { translation: translationGL}
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: SupportLanguages.ENGLISH,
    supportedLngs: Object.values(SupportLanguages),
    detection: {
      order: ['localStorage', 'navigator'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
