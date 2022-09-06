export default function Education({ formData, formatLine }) {
  const { education } = formData;
  const { degree, schoolName, city, state, achievements, from, to } =
    education[education[1] ? 1 : 0];

  return (
    <div className='display-section'>
      <div>
        <div className='display-info'>
          <h2 className='fs-700 fw-bold'>Education</h2>
          <p>{degree || 'Degree'}</p>
          <p>
            {schoolName || 'School Name'} - {city || 'City'}, {state || 'State'}
          </p>
          <p>{achievements || 'Achievements'}</p>
        </div>
        <ul className='list'>
          {education.map(
            (edu, index) =>
              index > 1 && (
                <li>
                  {Object.values(edu).map((Edu, index) =>
                    index !== 0 ? formatLine(Edu) : Edu
                  )}
                </li>
              )
          )}
        </ul>
      </div>
      <p>
        {from || 'From'} - {to || 'To'}
      </p>
    </div>
  );
}
