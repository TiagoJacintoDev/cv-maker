import { useState } from 'react';
import { VscClose } from 'react-icons/vsc';

export default function Education({ formData, formatLine, removeForm }) {
  const [canRemove, setCanRemove] = useState(false);
  const { education } = formData;
  const { degree, schoolName, city, state, achievements, from, to } =
    education[education[1] ? 1 : 0];

  return (
    <div className='display-section'>
      <div className='flex space-between align-center'>
        <div className='display-info'>
          <h2 className='fs-700 fw-bold'>Education</h2>
          <p>{degree || 'Degree'}</p>
          <p>
            {schoolName || 'School Name'} - {city || 'City'}, {state || 'State'}
          </p>
          <p>{achievements || 'Achievements'}</p>
        </div>
        <p>
          {from || 'From'} - {to || 'To'}
        </p>
      </div>
      <ul
        className='list'
        onMouseEnter={() => setCanRemove(true)}
        onMouseLeave={() => setCanRemove(false)}
      >
        {education.map(
          (edu, index) =>
            index > 1 && (
              <li
                className='flex align-center gap-small'
                onClick={removeForm}
                data-name='education'
                data-key={index}
              >
                {Object.values(edu).map((Edu, index) =>
                  index !== 0 ? formatLine(Edu) : Edu
                )}
                <VscClose className='svg' data-visible={canRemove} />
              </li>
            )
        )}
      </ul>
    </div>
  );
}
