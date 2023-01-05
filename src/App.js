import "./App.css";
import data from "./data";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Search from "./components/Search";
import CardElements from "./components/CardElements";
import { useState } from "react";

// Upgrade the objects with a new propertie: clicked
const upgradedObjects = data.map((el) => {
  return { ...el, bookmarked: false };
});

function App() {
  const [cardstate, setCardState] = useState(upgradedObjects);

  // create a state for searchfield
  const [searchField, setSearchField] = useState("");

  // create a state for bookmark tick
  const [bookmarkTick, setBookmarkTick] = useState(false);

  // create a state for bookmarked cards
  const [bookmarkedCards, setBookmarkedCards] = useState([]);

  // update state for bookmarked icon cards
  function bookmarkCard(id) {
    // Map version
    const newBookmarkedArray = cardstate.map(function (el, index) {
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

    setCardState(newBookmarkedArray);
  }

  // on checkbox click, change the state of bookmarkTick: checked

  // 1. filter the array and update the bookmarked state
  const filterBookmarked = function (event) {
    if (event.target.checked) {
      const newFilteredBookmarkedArray = cardstate.filter(
        (el) => el.bookmarked
      );
      setBookmarkTick(true);
      setBookmarkedCards(newFilteredBookmarkedArray);

      // 2. just change the bookmarkTick checked to false
    } else {
      setBookmarkTick(false);
    }
  };

  const onSearchChange = function (event) {
    setSearchField(event.target.value);
  };

  const filterCards = cardstate.filter((card) => {
    //card filtered only by search query
    const filteredCard = card.location
      .toLowerCase()
      .includes(searchField.toLowerCase());

    // if bookmark is ticked and the card has bookmark propertie set to true, return only those cards that were filtered by search query
    if (bookmarkTick && card.bookmarked) {
      return filteredCard;

      // if the bookmark tick is set off, only filter by search query
    } else if (!bookmarkTick) {
      return filteredCard;
    }
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
        <div className="sidebar--container">
          <SideBar />
        </div>
        <div className="card--list--container--list">
          <CardElements data={filterCards} bookmarkCard={bookmarkCard} />
        </div>
      </div>
    </div>
  );
}

export default App;
