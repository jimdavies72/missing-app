import "./MissingPersonList.css";
import { useState, useEffect } from "react";
import { fetchRequest } from "../../utils/fetchDry";
import MissingPersonCard from "../missingPersonCard/MissingPersonCard.js";
// import { listMissingPeople } from "../../utils/index.js";

const MissingPersonList = ({ user, filterOrigin, updatePersonHandler }) => {
  // const [missingPersons, setMissingPersons] = useState();
  const [mps, setMps] = useState([]);
  const [listHeader, setListHeader] = useState();

  const getMps = async () => {
    let payload;
    let endpoint;

    if (filterOrigin && filterOrigin.origin === "searchBar") {
      // Search bar
      setListHeader("Search Results...");
      endpoint = "missing/search";
      payload = {
        filterKey: "name",
        filterVal: filterOrigin.value,
      };
    } else if (filterOrigin && filterOrigin.origin === "myMP") {
      if (filterOrigin.value === "my") {
        // My missing persons
        setListHeader("My Missing Persons");
        endpoint = "missing/filtered";
        payload = {
          filterKey: "userId",
          filterVal: user,
        };
      } else {
        // All public visible missing persons
        setListHeader("All Missing People");
        endpoint = "missing/filtered";
        payload = {
          filterKey: "publicVisible",
          filterVal: true,
        };
      }
    } else {
      // All public visible missing persons
      setListHeader("All Missing People");
      endpoint = "missing/filtered";
      payload = {
        filterKey: "publicVisible",
        filterVal: true,
      };
    }

    const data = await fetchRequest(endpoint, payload, "POST");

    setMps(data.mps);
  };

  useEffect(() => {
    // listMissingPeople("publicVisible", true, setMissingPersons);

    // if(missingPersons) {
    //   setMps(missingPersons.mps);
    // }
    getMps();
  }, [filterOrigin, mps]);

  const personFoundHandler = async (id) => {
    const payload = {
      filterKey: "_id",
      filterVal: id,
      updateKey: "publicVisible",
      updateVal: false,
    };
    const data = await fetchRequest("missing", payload, "PATCH");
  };

  return (
    <div>
      <h1>{listHeader}</h1>
      <section className="person-list">
        {mps.map((person, index) => (
          <MissingPersonCard
            key={index}
            person={person}
            user={user}
            personFoundHandler={personFoundHandler}
            updatePersonHandler={updatePersonHandler}
          />
        ))}
      </section>
    </div>
  );
};

export default MissingPersonList;
