import React from "react";
import { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { createMissingPerson } from "../../utils";
import "./CreateMissing.css";

const CreateMissing = ({ user, missingPerson, setMissingPerson }) => {
  const [name, setName] = useState();
  const [ageAtDisappearance, setAgeAtDisappearance] = useState();
  const [userId, setUserId] = useState(user);
  const [publicVisible, setPublicVisible] = useState(true);
  const [picUrl, setPicUrl] = useState();
  const [missingSince, setMissingSince] = useState();
  const [missingFrom, setMissingFrom] = useState();
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("working")
    createMissingPerson(name, userId, ageAtDisappearance, picUrl, missingSince, missingFrom, setMissingPerson);
    setTimeout(() => {
      navigate("/home")
    }, 100)
  };

  return (
    <>
      {!user && <Navigate to="/" />}
      <h1>Register Missing Person</h1>
      <form onSubmit={handleSubmit} className="missing-person-form">
          <input
            type="text"
            name="name"
            placeholder="Missing person's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            name="age"
            placeholder="Missing person's age"
            value={ageAtDisappearance}
            onChange={(e) => setAgeAtDisappearance(e.target.value)}
          />
          <input
            type="text"
            name="picURL"
            placeholder="Enter image url"
            value={picUrl}
            onChange={(e) => setPicUrl(e.target.value)}
          />
          <input
            type="date"
            name="missingSince"
            placeholder="Missing since date"
            value={missingSince}
            onChange={(e) => setMissingSince(e.target.value)}
          />
          <input
            type="text"
            name="missingFrom"
            placeholder="Area missing from"
            value={missingFrom}
            onChange={(e) => setMissingFrom(e.target.value)}
          />
        <button className="button-main" type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateMissing;
