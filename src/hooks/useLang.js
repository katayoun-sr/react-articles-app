import { useContext } from "react";
import LangContext from "../context/LangProvider";

function useLang() {
  return useContext(LangContext);
}

export default useLang