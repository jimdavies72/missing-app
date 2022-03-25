import "./MissingPersonCard.css";
import { useState, useEffect } from "react";

const MissingPersonCard = ({ person, user, personFoundHandler }) => {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    if (user === person.userId) {
      setIsUser(true);
    }
  }, [isUser]);

  return (
    <div className="person-card">
      <img src={person.picURL} alt={"missing person"}></img>
      <h3>{person.name}</h3>
      <p>Age: {person.ageAtDisappearance}</p>
      <p>{person.missingSince}</p>
      <p>{person.missingFrom}</p>
      {isUser ? (
        <button
          onClick={() => personFoundHandler(person._id)}
          className="button-alt"
        >
          Mark as found
        </button>
      ) : null}
    </div>
  );
};

export default MissingPersonCard;
