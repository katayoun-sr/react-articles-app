import { createContext, useState, useEffect } from "react";
import languages, { languageList } from "../assets/lang/lang";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || languageList[0];
  });

  const texts = languages[lang];

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dir = texts.dir;
  }, [texts]);

  return (
    <LangContext.Provider value={{ lang, setLang, texts }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext;
