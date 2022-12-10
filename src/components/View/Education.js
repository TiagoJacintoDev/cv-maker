import { DisplayEducation } from "../../data/displayData";
import DeleteEntryComponent from "../DeleteEntryComponent";

export default function Education({ formDisplayData, formatLine, removeForm }) {
  const { education } = formDisplayData;

  const { degree, school, achievements, date } = DisplayEducation(
    education[education[1] && !firstObjectHasValues(education) ? 1 : 0]
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
            Education
          </h2>
          {degree}
          {school}
          {achievements}
        </div>
        {date}
      </div>
      <ul className="list">
        {education.map(
          (edu, index) =>
            index > 1 && (
              <DeleteEntryComponent
                className="flex align-center gap-small"
                handleClick={removeForm}
                id={index}
                name={Object.values(edu).map((Edu, index) =>
                  index !== 0 ? formatLine(Edu) : Edu
                )}
                formName="education"
                component={ListItem}
              />
            )
        )}
      </ul>
    </div>
  );
}
