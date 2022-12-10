import { forwardRef } from "react";
import Education from "./Education";
import Experience from "./Experience";
import General from "./General";
import Skills from "./Skills";

export const Display = forwardRef(
  ({ formDisplayData, setFormDisplayData }, ref) => {
    function removeForm(e) {
      setFormDisplayData((lastDisplayFormData) => ({
        ...lastDisplayFormData,
        [e.target.dataset.name]: lastDisplayFormData[
          e.target.dataset.name
        ].filter(
          (form, index) => index === 0 || index !== +e.target.dataset.id
        ),
      }));
    }

    function formatLine(line) {
      return line && ` | ${line}`;
    }

    return (
      <div ref={ref} className="card display-wrapper">
        <General formDisplayData={formDisplayData} />
        <Experience
          removeForm={removeForm}
          formDisplayData={formDisplayData}
          formatLine={formatLine}
        />
        <Skills removeForm={removeForm} formDisplayData={formDisplayData} />
        <Education
          removeForm={removeForm}
          formatLine={formatLine}
          formDisplayData={formDisplayData}
        />
      </div>
    );
  }
);
