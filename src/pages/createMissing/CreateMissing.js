import "./CreateMissing.css";
import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { fetchRequest } from "../../utils/fetchDry";
import { formatDate } from "../../utils/functions";

const CreateMissing = ({ user, missingPerson, isCreate }) => {
  const [name, setName] = useState();
  const [ageAtDisappearance, setAgeAtDisappearance] = useState();
  //const [publicVisible, setPublicVisible] = useState(true);
  const [picUrl, setPicUrl] = useState();
  const [missingSince, setMissingSince] = useState();
  const [missingFrom, setMissingFrom] = useState();
  const [contactDetail, setContactDetail] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isCreate) {
      // Its an update so populate fields with existing data
      setName(missingPerson.name);
      setAgeAtDisappearance(missingPerson.ageAtDisappearance);
      setPicUrl(missingPerson.picURL);
      setMissingSince(formatDate(missingPerson.missingSince));
      setMissingFrom(missingPerson.missingFrom);
      setContactDetail(missingPerson.contactDetail);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let httpVerb;
    let payload;
    if (isCreate) {
      // Its a create record
      httpVerb = "POST";
      payload = {
        name: name,
        userId: user,
        picURL: picUrl,
        missingSince: missingSince,
        missingFrom: missingFrom,
        ageAtDisappearance: ageAtDisappearance,
        contactDetail: contactDetail,
      };
    } else {
      //Its an update record
      httpVerb = "PUT";
      payload = {
        id: missingPerson._id,
        data: {
          name: name,
          userId: user,
          picURL: picUrl,
          missingSince: missingSince,
          missingFrom: missingFrom,
          ageAtDisappearance: ageAtDisappearance,
          contactDetail: contactDetail,
        },
      };
    }
    const data = await fetchRequest("missing", payload, httpVerb);

    setTimeout(() => {
      navigate("/home");
    }, 100);
  };

  return (
    <>
      {!user && <Navigate to="/" />}
      {isCreate ? (
        <h1>Register Missing Person</h1>
      ) : (
        <h1>Update {name}'s details</h1>
      )}
      <form onSubmit={handleSubmit} className="missing-person-form">
        <input
          type="text"
          name="name"
          placeholder="Missing person's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
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
          required
        />
        <input
          type="text"
          name="missingFrom"
          placeholder="Area missing from"
          value={missingFrom}
          onChange={(e) => setMissingFrom(e.target.value)}
          required
        />
        <input
          type="text"
          name="contactDetail"
          placeholder="Contact details"
          value={contactDetail}
          onChange={(e) => setContactDetail(e.target.value)}
        />
        <div className="button-container">
          <Link to="/home">
            <button className="button-main">Go Back</button>
          </Link>
          <button className="button-main" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateMissing;
