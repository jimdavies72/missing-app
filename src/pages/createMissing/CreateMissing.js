import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./CreateMissing.css";

const CreateMissing = ({ user }) => {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(input);
  };

  return (
    <>
      {/* {!user && <Navigate to="/" />} */}
      <h1>Register Missing Person</h1>
      <form onSubmit={handleSubmit} className="RegisterMPform">
          <input
            type="text"
            name="name"
            placeholder="Missing person's name"
            value={input.name || ""}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Missing person's age"
            value={input.age || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="picURL"
            placeholder="Enter image url"
            value={input.picURL || ""}
            onChange={handleChange}
          />
          <input
            type="date"
            name="missingSince"
            placeholder="Missing since date"
            value={input.missingSince || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="missingFrom"
            placeholder="Area missing from"
            value={input.missingFrom || ""}
            onChange={handleChange}
          />
        <input type="Submit" />
      </form>
    </>
  );
};

export default CreateMissing;
