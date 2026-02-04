import navbarFa from "./fa/navbar.json";
import navbarEn from "./en/navbar.json";

export const languageList = ['fa', 'en']

const languages = {
    fa: {
        dir: "rtl",
        navbar: navbarFa,
    },

    en:{
        dir: "ltr",
        navbar: navbarEn,
    }
}

export default languages;