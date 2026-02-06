import navbarFa from "./fa/navbar.json";
import footerFa from "./fa/footer.json";
import cardFa from "./fa/card.json";


import navbarEn from "./en/navbar.json";
import footerEn from "./en/footer.json";
import cardEn from "./en/card.json";



export const languageList = ["fa", "en"];

const languages = {
  fa: {
    dir: "rtl",
    navbar: navbarFa,
    footer: footerFa,
    card: cardFa,
  },

  en: {
    dir: "ltr",
    navbar: navbarEn,
    footer: footerEn,
    card: cardEn,
  },
};

export default languages;
