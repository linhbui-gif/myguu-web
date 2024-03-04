import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import vi from '@/i18n/vi';
import en from '@/i18n/en';
import { ELocale } from '@/common/enums';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    fallbackLng: ELocale.VI,
    lng: localStorage.getItem('i18nextLng') || ELocale.VI,
    debug: false,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
