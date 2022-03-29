import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
// import { useEffect } from "react";
// import { listMissingPeople } from "../../utils/index.js";
import MissingPersonList from "../../components/missingPersonList/MissingPersonList.js";
import SearchBar from "../../components/searchBar/SearchBar.js";
import backgroundBannerCloudL from "../../media/backgroundBannerCloudL.png";
import "./Home.css";

const Home = ({ user, updatePersonHandler, createPersonHandler }) => {
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
      <section className="home-container">
        <div
          className="title-container"
          style={{
            backgroundImage: `linear-gradient(rgba(36,123,160,0.25), rgba(36,123,160,0.25)), url(${backgroundBannerCloudL})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "0.375rem",
          }}
        >
          <h1>Individual Concern Query</h1>
        </div>
        <section className="search-container">
          <div>
            <SearchBar
              filterOrigin={filterOrigin}
              setFilterOrigin={setFilterOrigin}
            />
          </div>
          <div>
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
              <button
                onClick={() => createPersonHandler(true)}
                className="button-main"
              >
                Register Missing Person
              </button>
            </Link>
          </div>
        </section>
        <MissingPersonList
          user={user}
          filterOrigin={filterOrigin}
          updatePersonHandler={updatePersonHandler}
        />
      </section>
    </>
  );
};

export default Home;
