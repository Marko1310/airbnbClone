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

// Upgrade the objects with a new propertie: clicked
const upgradedObjects = data.map((el) => {
  return { ...el, bookmarked: false };
});

function App() {
  const [cardstate, setCardState] = useState({
    cards: upgradedObjects,
    searchfield: "",
    checked: false,
  });

  // create a state for bookmarked cards
  const [bookmarkedCards, setBookmarkedCards] = useState([]);

  // update state for bookmarked icon cards
  function bookmarkCard(id) {
    // Map version
    const newBookmarkedArray = cardstate.cards.map(function (el, index) {
      if (index + 1 === id) {
        el.bookmarked = !el.bookmarked;
      }
      return el;
    });

    // Loop Version
    // const newBookmarkedArray = cardstate.cards;
    // for (let i = 0; i < newBookmarkedArray.length; i++) {
    //   if (newBookmarkedArray[i].id === id) {
    //     newBookmarkedArray[i].bookmarked = !newBookmarkedArray[i].bookmarked;
    //   }
    // }

    setCardState({ cards: newBookmarkedArray, searchfield: "" });
  }

  // on checkbox click, change the state of cardstate: checked

  // 1. filter the array and update the bookmarked state
  const filterBookmarked = function (event) {
    if (event.target.checked) {
      const newFilteredBookmarkedArray = cardstate.cards.filter(
        (el) => el.bookmarked
      );
      setCardState((prevcardstate) => {
        return {
          ...prevcardstate,
          checked: true,
        };
      });
      setBookmarkedCards(newFilteredBookmarkedArray);

      // 2. just change the checked to false
    } else {
      setCardState((prevcardstate) => {
        return {
          ...prevcardstate,
          checked: false,
        };
      });
    }
  };

  const onSearchChange = function (event) {
    setCardState((cardstate) => {
      return { ...cardstate, searchfield: event.target.value };
    });
  };

  const filterCards = cardstate.cards.filter((cards) => {
    return cards.location
      .toLowerCase()
      .includes(cardstate.searchfield.toLowerCase());
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <Search
        searchChange={onSearchChange}
        filterBookmarked={filterBookmarked}
      />
      <div className="card--list">
        {
          // Choose what to send as a prop to render depending on cardstate.checked
          <CardElements
            data={cardstate.checked ? bookmarkedCards : filterCards}
            bookmarkCard={bookmarkCard}
          />
        }
      </div>
    </div>
  );
}

export default App;
