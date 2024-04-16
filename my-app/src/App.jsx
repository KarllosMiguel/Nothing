import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Home from "./components/pages/home";
import Header from "./components/Header";
import Services from "./components/pages/services";
import Product from "./components/pages/product";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Home/>
      <Services/>
      <Product/>
      <Footer/>
    </>
  );
}

export default App;
