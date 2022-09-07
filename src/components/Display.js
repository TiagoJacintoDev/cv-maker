import { forwardRef } from 'react';
import Education from './DisplaySections/Education';
import Experience from './DisplaySections/Experience';
import General from './DisplaySections/General';
import Skills from './DisplaySections/Skills';

export const Display = forwardRef(({ formData, setFormData }, ref) => {
  function removeForm(e) {
    setFormData(oldFormData => ({
      ...oldFormData,
      [e.target.dataset.name]: oldFormData[e.target.dataset.name].filter(
        (form, index) => index === 0 || index !== +e.target.dataset.key
      ),
    }));
  }

  function formatLine(line) {
    return line && ` | ${line}`;
  }

  return (
    <div ref={ref} className='container'>
      <div className='card'>
        <General formData={formData} />
        <Experience
          removeForm={removeForm}
          formData={formData}
          formatLine={formatLine}
        />
        <Skills removeForm={removeForm} formData={formData} />
        <Education
          removeForm={removeForm}
          formatLine={formatLine}
          formData={formData}
        />
      </div>
    </div>
  );
});
