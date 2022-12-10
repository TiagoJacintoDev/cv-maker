import { useState } from "react";
import { DisplayExperience } from "../../data/displayData";
import DeleteEntryComponent from "../DeleteEntryComponent";

export default function Experience({
  formDisplayData,
  formatLine,
  removeForm,
}) {
  const { experience } = formDisplayData;
  const [canRemoveFromList, setCanRemoveFromList] = useState(false);

  const { role, location, accomplishment, date } = DisplayExperience(
    experience[experience[1] && !firstObjectHasValues(experience) ? 1 : 0]
  );

  function firstObjectHasValues(object) {
    return object.some(
      (value, index) => index === 0 && Object.values(value).length > 0
    );
  }

  const ListItem = ({ children, ...props }) => <li {...props}>{children}</li>;

  return (
    <div className="display-section">
      <div className="flex space-between align-center">
        <div className="display-info">
          <h2 className="fs-700 fw-bold uppercase text-light-blue">
            Experience
          </h2>
          {role}
          {location}
          {accomplishment}
        </div>
        {date}
      </div>
      <ul
        className="list"
        onMouseEnter={() => setCanRemoveFromList(true)}
        onMouseLeave={() => setCanRemoveFromList(false)}
      >
        {experience.map(
          (exp, index) =>
            index > 1 && (
              <DeleteEntryComponent
                className="flex align-center gap-small"
                handleClick={removeForm}
                id={index}
                name={Object.values(exp).map((Exp, index) =>
                  index !== 0 ? formatLine(Exp) : Exp
                )}
                formName="experience"
                component={ListItem}
              />
            )
        )}
      </ul>
    </div>
  );
}
