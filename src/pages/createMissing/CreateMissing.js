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
      {!user && <Navigate to="/" />}
      <h1>Register Missing Person</h1>
      <form onSubmit={handleSubmit} className="RegisterMPform">
        <label>
          Missing person's name:
          <input
            type="text"
            name="name"
            value={input.name || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Missing person's age:
          <input
            type="number"
            name="age"
            value={input.age || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter image url:
          <input
            type="text"
            name="picURL"
            value={input.picURL || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Missing since date:
          <input
            type="date"
            name="missingSince"
            value={input.missingSince || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Area missing from:
          <input
            type="text"
            name="missingFrom"
            value={input.missingFrom || ""}
            onChange={handleChange}
          />
        </label>
        <input type="Submit" />
      </form>
    </>
  );
};

export default CreateMissing;
