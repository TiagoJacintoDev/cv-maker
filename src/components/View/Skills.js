import { useState } from "react";
import CSS from "./DisplaySections.module.css";
import DeleteEntryComponent from "../DeleteEntryComponent";

export default function Skills({ formDisplayData, removeForm }) {
  const { skills } = formDisplayData;

  function isObjectEmpty(object) {
    return object.some((value) => Object.values(value).length > 0);
  }

  const Button = ({ children, ...props }) => (
    <button {...props}>{children}</button>
  );

  return (
    <div className="display-section">
      <div className="display-info full-width">
        <h2 className="fs-700 fw-bold uppercase text-light-blue">Skills</h2>
        {isObjectEmpty(skills) && (
          <div className="flex gap-small full-width flex-wrap">
            {skills.map(
              (skill, index) =>
                skill.name && (
                  <DeleteEntryComponent
                    className={`${CSS.button} flex align-center gap-small`}
                    handleClick={removeForm}
                    id={index}
                    name={skill.name}
                    formName="skills"
                    component={Button}
                  />
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
