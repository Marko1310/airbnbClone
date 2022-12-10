import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";
import Search from "./components/Search";
import CardElements from "./components/CardElements";
import { useState } from "react";

// const CardElements = data.map((el) => {
//   return <Card key={el.id} element={el} />;
// });

function App() {
  const [cardstate, setCardState] = useState({
    cards: data,
    searchfield: "",
  });

  const onSearchChange = function (event) {
    setCardState((cardstate) => {
      return { ...cardstate, searchfield: event.target.value };
    });

    console.log(filterCards);
    console.log(cardstate.searchfield);
  };

  const filterCards = cardstate.cards.filter((cards) => {
    return cards.location
      .toLowerCase()
      .includes(cardstate.searchfield.toLowerCase());
  });

  return (
    <div>
      <Navbar />
      <Search searchchange={onSearchChange} />
      <Hero />
      <section className="card--list">
        {<CardElements data={filterCards} />}
      </section>
    </div>
  );
}

export default App;
