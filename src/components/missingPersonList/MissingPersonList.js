import "./MissingPersonList.css";
import MissingPersonCard from "../missingPersonCard/MissingPersonCard.js";

const MissingPersonList = ({ missingPersons }) => {
  return (
    <div>
      <section className="person-list">
        {missingPersons.map((person, index) => {
          return <MissingPersonCard key={index} person={person} />
        })}
      </section>
    </div>
  );
};

export default MissingPersonList;
