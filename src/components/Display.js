import Education from './Display/Education';
import Experience from './Display/Experience';
import General from './Display/General';
import Skills from './Display/Skills';

export default function Display({ formData, setFormData }) {
  function formatLine(line) {
    return line && ` | ${line}`;
  }

  return (
    <div className='container'>
      <div className='card'>
        <General formData={formData} />
        <Experience formData={formData} formatLine={formatLine} />
        <Skills formData={formData} setFormData={setFormData} />
        <Education formatLine={formatLine} formData={formData} />
      </div>
    </div>
  );
}
