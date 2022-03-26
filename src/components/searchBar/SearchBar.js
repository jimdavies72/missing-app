import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({ filterOrigin, setFilterOrigin }) => {
  const [searchText, setSearchText] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    setFilterOrigin({ origin: "searchBar", value: searchText });
    setSearchText("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search Names..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        ></input>
        {searchText ? <button type="submit">Search</button> : null}
      </form>
    </>
  );
};

export default SearchBar;
