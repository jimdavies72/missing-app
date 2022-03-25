import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
// import { useEffect } from "react";
// import { listMissingPeople } from "../../utils/index.js";
import MissingPersonList from "../../components/missingPersonList/MissingPersonList.js";
import SearchBar from "../../components/searchBar/SearchBar.js";
import "./Home.css";

const Home = ({ user }) => {
  const [filterOrigin, setFilterOrigin] = useState({});
  const [bool, setBool] = useState(true);

  const filterOriginHandler = () => {
    if (bool) {
      setFilterOrigin({ origin: "myMP", value: "my" });
    } else {
      setFilterOrigin({ origin: "myMP", value: "all" });
    }
    setBool(!bool);
  };

  return (
    <>
      {!user && <Navigate to="/" />}
      <section className="HomeContainer">
        <section className="SearchContainer">
          <SearchBar
            filterOrigin={filterOrigin}
            setFilterOrigin={setFilterOrigin}
          />
          {bool ? (
            <button
              onClick={() => filterOriginHandler()}
              className="button-main"
            >
              My Missing Persons
            </button>
          ) : (
            <button
              onClick={() => filterOriginHandler()}
              className="button-main"
            >
              All Missing Persons
            </button>
          )}
          <Link to="/register">
            <button className="button-main">Register Missing Person</button>
          </Link>
        </section>
        <h1>All Missing People</h1>
        <MissingPersonList user={user} filterOrigin={filterOrigin} />
      </section>
    </>
  );
};

export default Home;
