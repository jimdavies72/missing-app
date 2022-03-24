import "./MissingPersonList.css";
import MissingPersonCard from "../missingPersonCard/MissingPersonCard.js";
import { useState, useEffect } from "react";
// import { listMissingPeople } from "../../utils/index.js";
import { fetchRequest } from "../../utils/fetchDry";

const MissingPersonList = ({ user }) => {
  // const [missingPersons, setMissingPersons] = useState();
  const [mps, setMps] = useState([]);

  const getMps = async () => {
    const payload = {
      filterKey: "publicVisible",
      filterVal: true,
    }
    const data = await fetchRequest("missing/filtered", payload, "POST");
    setMps(data.mps);
  }
  
  useEffect(() => {
    // listMissingPeople("publicVisible", true, setMissingPersons);

    // if(missingPersons) {
    //   setMps(missingPersons.mps);
    // }
    getMps();
  }, []);

  const personFoundHandler = async (id) => {
    const payload = {
      filterKey: "_id",
      filterVal: id,
      updateKey: "publicVisible",
      updateVal: false,
    }
    const data = await fetchRequest("missing", payload, "PATCH");
  }

  return ( 
    <div>
      <section className="person-list">
        {mps.map((person, index) => (
          <MissingPersonCard key={index} person={person} user={user} personFoundHandler={personFoundHandler} />
          ))}
      </section>
       
    </div>
  );
};

export default MissingPersonList;
