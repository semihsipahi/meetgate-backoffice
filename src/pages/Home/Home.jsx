import Cookies from 'js-cookie';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { fetchResources } from '../../service/Resource/ResourceService';

function Home() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = async () => {
    const current = Cookies.get('LanguageId');

    const lang =
      current === import.meta.env.VITE_API_LANGUAGE_ID_ENG
        ? import.meta.env.VITE_API_LANGUAGE_ID_TR
        : import.meta.env.VITE_API_LANGUAGE_ID_ENG;

    Cookies.set('LanguageId', lang);

    if (!i18n.hasResourceBundle(lang, 'translation')) {
      const resources = await fetchResources();
      i18n.addResourceBundle(lang, 'translation', resources, true, true);
    }

    await i18n.changeLanguage(lang);
  };

  return (
    <div>
      <br />
      <br />
      <div style={{ textAlign: 'center' }}>
        <h1>{t('api_common_resource_already_added')}</h1>
        <br />
        <p>{t('api_companyhandler_companycouldnotbecreated')}</p>
        <br />
        <button onClick={changeLanguage}>Change Language</button>
        <br />
        <br />
        <button
          onClick={() => {
            navigate('/analyse/result');
          }}
        >
          Show Analyse
        </button>
      </div>
    </div>
  );
}

export default Home;
