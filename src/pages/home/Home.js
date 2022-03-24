import { Link, Navigate } from "react-router-dom";
// import { useEffect } from "react";
// import { listMissingPeople } from "../../utils/index.js";
import MissingPersonList from "../../components/missingPersonList/MissingPersonList.js";
import SearchBar from "../../components/searchBar/SearchBar.js";
import "./Home.css";


const Home = ({ user }) => {

  return (
    <>
      {!user && <Navigate to="/" />}
      <section className="HomeContainer">
        <section className="SearchContainer">
          <SearchBar />
          <button className="button-main">My Missing Person</button>
          <Link to="/register"><button className="button-main">Register Missing Person</button></Link>
        </section>
        <h1>All Missing People</h1>
        <MissingPersonList user={user} />
      </section>
    </>
  );
};

export default Home;
