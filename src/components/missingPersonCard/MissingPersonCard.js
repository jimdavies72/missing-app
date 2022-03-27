import "./MissingPersonCard.css";
import { useState, useEffect } from "react";

const MissingPersonCard = ({ person, user, personFoundHandler }) => {
  const [picUrl, setPicUrl] = useState();
  const [msDate, setMsDate] = useState();

  const displayImage = () => {
    let cardImage;
    try {
      if (person.picURL) {
        if (person.picURL.slice(0, 4) === "http") {
          // picURL is a web link
          cardImage = person.picURL;
        } else {
          // picURL is a local image
          cardImage = require(`../../media/people/${person.picURL}`);
        }
      } else {
        cardImage = require("../../media/nopic-placeholder.png");
      }
      setPicUrl(cardImage);
    } catch (error) {
      cardImage = require("../../media/nopic-placeholder.png");
      setPicUrl(cardImage);
    }
  };

  useEffect(() => {
    displayImage();
    setMsDate(
      new Date(person.missingSince).toLocaleString("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
  });

  return (
    <div className="person-card">
      <img src={picUrl} alt={"missing person"} height={200} width={200}></img>
      <h3>{person.name}</h3>
      <p>Age at disappearance: {person.ageAtDisappearance}</p>
      <p>Missing since: {msDate}</p>
      <p>Missing from: {person.missingFrom}</p>
      <div className="card-buttons">
        {user === person.userId ? (
          person.publicVisible ? (
            <span>
              <i
                onClick={() => personFoundHandler(person._id)}
                className="fa-solid fa-person-circle-plus"
              ></i>
              <i className="fa-solid fa-file-pen"></i>
            </span>
          ) : (
            <p>Person Found</p>
          )
        ) : null}
        <i className="fa-solid fa-mountain-sun"></i>
      </div>
    </div>
  );
};

export default MissingPersonCard;
