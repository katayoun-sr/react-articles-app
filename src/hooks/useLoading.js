import { useContext } from "react";
import LoadingContext from "../context/LoadingProvider";

function useLoading() {
  return useContext(LoadingContext);
}

export default useLoading