import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "../assets/locales/en/translation.json";

export const defaultNS = "translation";
export const resources = {
    en: {
        translation: { ...en },
    },
} as const;

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: "en",
    defaultNS,
    resources,
});

export default i18n;
