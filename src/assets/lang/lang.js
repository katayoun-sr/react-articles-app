import navbarFa from "./fa/navbar.json";
import footerFa from "./fa/footer.json"




import navbarEn from "./en/navbar.json";
import footerEn from "./en/footer.json"

export const languageList = ['fa', 'en']

const languages = {
    fa: {
        dir: "rtl",
        navbar: navbarFa,
        footer: footerFa,
    },

    en:{
        dir: "ltr",
        navbar: navbarEn,
        footer: footerEn
    }
}

export default languages;