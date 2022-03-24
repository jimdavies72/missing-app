import { Navigate } from "react-router-dom";
import MissingPersonList from "../../components/missingPersonList/MissingPersonList.js";
import SearchBar from "../../components/searchBar/SearchBar.js";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  // Dummy missing person data until the fetch request is implemented
  const [missingPersons, setMissingPersons] = useState([
    {
      id: 1,
      name: "john",
      age: "30",
      missingSince: "30/01/2022",
      missingFrom: "London",
    },
    {
      id: 2,
      name: "Emily",
      age: "33",
      missingSince: "29/01/2022",
      missingFrom: "Manchester",
    },
    {
      id: 3,
      name: "Dave",
      age: "40",
      missingSince: "30/01/2022",
      missingFrom: "Liverpool",
    },
    {
      id: 4,
      name: "john",
      age: "30",
      missingSince: "30/01/2022",
      missingFrom: "London",
    },
    {
      id: 5,
      name: "Emily",
      age: "33",
      missingSince: "29/01/2022",
      missingFrom: "Manchester",
    },
    {
      id: 6,
      name: "Dave",
      age: "40",
      missingSince: "30/01/2022",
      missingFrom: "Liverpool",
    },
  ]);

  return (
    <>
      {!user && <Navigate to="/" />}
      <section className="HomeContainer">
        <section className="SearchContainer">
          <SearchBar />
          <button className="button-main">My Missing Person</button>
          <button className="button-main">Register Missing Person</button>
        </section>
        <h1>All Missing People</h1>
        <MissingPersonList missingPersons={missingPersons} />
      </section>
    </>
  );
};

export default Home;
