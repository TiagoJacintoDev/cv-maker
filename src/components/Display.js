import Education from './Display/Education';
import Experience from './Display/Experience';
import General from './Display/General';
import Skills from './Display/Skills';

export default function Display({ formData, setFormData }) {
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
    <div className='container'>
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
}
