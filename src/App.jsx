import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CardContainer from "./components/CardContainer";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <CardContainer />
      <Footer />
    </>
  );
}

export default App;
