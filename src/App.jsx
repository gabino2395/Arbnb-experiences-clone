import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";
import Hero from "./components/Hero";
import data from "./data";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const dataElements = data.map((element) => {
    return (
      <Card
        key={element.id}
        {...element}
        // img={element.coverImg}
        // rating={element.stats.rating}
        // reviewCount={element.stats.reviewCount}
        // location={element.location}
        // title={element.title}
        // price={element.price}
        // openSpots={element.openSpots}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{dataElements}</section>
      <Footer />
    </>
  );
}

export default App;
