import MissingPersonList from "../../components/missingPersonList/MissingPersonList.js";
import SearchBar from "../../components/searchBar/SearchBar.js"
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="HomeContainer">
        <section className="SearchContainer">
          <SearchBar />
          <button className="ButtonMain">My Missing Person</button>
          <button className="ButtonMain">Register Missing Person</button>
        </section>
        <h1>All Missing People</h1>
        <MissingPersonList />
      </section>
    </>
  );
};

export default Home;
