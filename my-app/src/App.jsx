import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Home from "./components/pages/home";
import Header from "./components/Header";
import Services from "./components/pages/services";
import Section from "./components/pages/Section";

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Home/>
      <Services/>
      <Section/>
    </>
  );
}

export default App;
