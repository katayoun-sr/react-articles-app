import { LoadingProvider } from "../../context/LoadingProvider";
import Footer from "../footer/Footer";
import Loading from "../loading/Loading";
import Navbar from "../navbar/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <LoadingProvider>
      <Loading />
      {children}
      </LoadingProvider>
      <Footer />
    </>
  );
}

export default Layout;
