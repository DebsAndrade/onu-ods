import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import Header from "./components/header/Header";
import Cards from "./container/Cards";

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Cards />
    </>
  );
}

export default App;
