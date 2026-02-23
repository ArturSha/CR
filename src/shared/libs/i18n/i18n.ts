import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import type { HttpBackendOptions } from 'i18next-http-backend';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
export { useTranslation } from 'react-i18next';
export const languages = ['en', 'ru', 'de', 'es', 'tr'] as const;
export type languageType = (typeof languages)[number];
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    fallbackLng: 'en',
    supportedLngs: languages,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
      queryStringParams: { v: '1.0.1' },
    },
  });

export default i18n;
