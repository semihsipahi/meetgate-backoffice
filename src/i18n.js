import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: 'tr',
    fallbackLng: 'tr',
    debug: false,
    interpolation: { escapeValue: false },
    backend: {
      loadPath: () => {
        return 'http://localhost:5080/api/Resource/GetResourceAllList';
      },
      parse: (data) => {
        return typeof data === 'string' ? JSON.parse(data) : data;
      },
      requestOptions: {
        credentials: 'omit',
      },
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
