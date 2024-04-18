import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import plTranslation from "./translation/pl.json";
import enTranslation from "./translation/en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    pl: {
      translation: plTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
