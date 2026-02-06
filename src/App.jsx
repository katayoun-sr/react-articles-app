import { Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./components/card/Card";
import Layout from "./components/layout/layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
