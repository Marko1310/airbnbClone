import React from "react";

const Search = function ({ searchChange, filterBookmarked }) {
  return (
    <div className="search_and_bookmark_container">
      <div className="search--container">
        <input
          className="search--box"
          type="search"
          placeholder="filter reviews"
          onChange={searchChange}
        />
      </div>
      <div className="bookmark--container">
        <form>
          <input
            type="checkbox"
            id="bookmarked"
            name="bookmarked"
            value="bookmarked"
            onChange={(event) => filterBookmarked(event)}
          />
          <label> Bookmarked</label>
        </form>
      </div>
    </div>
  );
};

export default Search;
