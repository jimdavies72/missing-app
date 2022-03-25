import "./MissingPersonList.css";
import MissingPersonCard from "../missingPersonCard/MissingPersonCard.js";
import { useState, useEffect } from "react";
// import { listMissingPeople } from "../../utils/index.js";
import { fetchRequest } from "../../utils/fetchDry";

const MissingPersonList = ({ user, filterOrigin }) => {
  // const [missingPersons, setMissingPersons] = useState();
  const [mps, setMps] = useState([]);

  const getMps = async () => {
    let payload;
    let endpoint;

    if (filterOrigin && filterOrigin.origin === "searchBar") {
      // Search bar
      endpoint = "missing/search";
      payload = {
        filterKey: "name",
        filterVal: filterOrigin.value,
      };
    } else if (filterOrigin && filterOrigin.origin === "myMP") {
      if (filterOrigin.value === "my") {
        // My missing persons
        endpoint = "missing/filtered";
        payload = {
          filterKey: "userId",
          filterVal: user,
        };
      } else {
        // All public visible missing persons
        endpoint = "missing/filtered";
        payload = {
          filterKey: "publicVisible",
          filterVal: true,
        };
      }
    } else {
      // All public visible missing persons
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
  }, [filterOrigin]);

  const personFoundHandler = async (id) => {
    const payload = {
      filterKey: "_id",
      filterVal: id,
      updateKey: "publicVisible",
      updateVal: false,
    };
    const data = await fetchRequest("missing", payload, "PATCH");
    // let temp = [...mps];
    // temp = temp.filter((obj) => obj._id !== id);
    // setMps([...temp]);
  };

  return (
    <div>
      <section className="person-list">
        {mps.map((person, index) => (
          <MissingPersonCard
            key={index}
            person={person}
            user={user}
            personFoundHandler={personFoundHandler}
          />
        ))}
      </section>
    </div>
  );
};

export default MissingPersonList;
