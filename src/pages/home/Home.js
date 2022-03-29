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
            // backgroundImage: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.3)), url(${backgroundBannerCloudL})`,
            // backgroundImage: `linear-gradient(90deg, rgba(36,123,160,1) 0%, rgba(27,152,224,1) 20%, rgba(255,255,255,1) 100%), url(${backgroundBannerCloudL})`,
            // backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${backgroundBannerCloudL})`,
            // backgroundImage: `linear-gradient(rgba(200, 200, 255, 0.5), rgba(200, 200, 255, 0.5)), url(${backgroundBannerCloudL})`,
            // backgroundImage: `linear-gradient(rgba(155, 155, 155, 0.5), rgba(155, 155, 155, 0.5)), url(${backgroundBannerCloudL})`,
            backgroundImage: `linear-gradient(rgba(36,123,160,0.25), rgba(36,123,160,0.25)), url(${backgroundBannerCloudL})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "0.375rem",
          }}
        >
          <h1>Independent Concern Query</h1>
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
