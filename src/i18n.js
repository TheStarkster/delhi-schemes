import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import hindi from '../i18n/hi.json';
import english from '../i18n/en.json';

// import hindi json file from '../i18n/hi.json';
const resources = {
    hi: hindi,
    en: english
};

i18n
.use(initReactI18next)
.init({
    resources,
    lng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;