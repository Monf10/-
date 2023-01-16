import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: require ("./eng.json") // უმჯობესია json ფაილები შექმნათ ცალ ცალკე და უბრალოდ დაუკავშირდეთ
  },
  geo: { // მოარგეთ თქვენთვის სასურველ ენებს
    translation: require("./geo.json")
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "geo",
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;