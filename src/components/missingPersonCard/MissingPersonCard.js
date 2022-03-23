import "./MissingPersonCard.css";

const MissingPersonCard = ({ person }) => {
  return (
    <div className="person-card">
      <h3>{person.name}</h3>
      <p>Age: {person.age}</p>
      <p>{person.missingSince}</p>
      <p>{person.missingFrom}</p>
      <button className="button-alt">Mark as found</button>
    </div>
  );
};

export default MissingPersonCard;
