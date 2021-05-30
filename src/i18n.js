import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
 
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
 

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'en',
    backend: {
      /* translation file path */
      //TODO adicionar prefixo PersonalCurriculum no caso de rodar local, remover antes de cada deploy
      loadPath: 'assets/i18n/{{ns}}/{{lng}}.json',
      allowMultiLoading: false, // set loadPath: '/locales/resources.json?lng={{lng}}&ns={{ns}}' to adapt to multiLoading


      //parse data before it has been sent by addPath
      parsePayload: function(namespace, key, fallbackValue) { debugger; return { key } },
    
      // allow cross domain requests
      crossDomain: false,
    
      // allow credentials on cross domain requests
      withCredentials: false,
    
      // overrideMimeType sets request.overrideMimeType("application/json")
      overrideMimeType: false,
    
    
      // define a custom xhr function
      // can be used to support XDomainRequest in IE 8 and 9
      //
      // 'url' will be passed the value of 'loadPath'
      // 'options' will be this entire options object
      // 'callback' is a function that takes two parameters, 'data' and 'xhr'.
      //            'data' should be the key:value translation pairs for the
      //            requested language and namespace, or null in case of an error.
      //            'xhr' should be a status object, e.g. { status: 200 }
      // 'data' will be a key:value object used when saving missing translations
      ajax: function (url, options, callback, data) {},
    
    },
    fallbackLng: 'en',
    debug: true,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      wait: true
    }
  });
 
export default i18n;