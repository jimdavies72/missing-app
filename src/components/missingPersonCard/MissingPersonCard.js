import "./MissingPersonCard.css";
import { useState, useEffect } from "react";
const noPicMale = require("../../media/nopic-placeholder.png");

const MissingPersonCard = ({ person, user, personFoundHandler }) => {
  const [isUser, setIsUser] = useState(false);
  const [picUrl, setPicUrl] = useState();
  const [publicVis, setPublicVis] = useState(person.publicVisible);

  useEffect(() => {
    if (user === person.userId) {
      setIsUser(true);
    }
    if (person.picURL) {
      setPicUrl(person.picURL);
    } else {
      setPicUrl(noPicMale);
    }
  });

  return (
    <div className="person-card">
      <img src={picUrl} alt={"missing person"} height={200} width={200}></img>
      <h3>{person.name}</h3>
      <p>{person.userId}</p>
      <p>Age at disappearance: {person.ageAtDisappearance}</p>
      <p>Missing since: {person.missingSince}</p>
      <p>Missing from: {person.missingFrom}</p>
      {isUser ? (
        person.publicVisible ? (
          <button
            onClick={() => personFoundHandler(person._id)}
            className="button-alt"
          >
            Mark as found
          </button>
        ) : (
          <h3>Person Found</h3>
        )
      ) : null}
    </div>
  );
};

export default MissingPersonCard;
