import { useState } from 'react';
import { VscClose } from 'react-icons/vsc';
import CSS from './DisplaySections.module.css';

export default function Experience({ formData, formatLine, removeForm }) {
  const { experience } = formData;
  const [canRemove, setCanRemove] = useState(false);

  const { role, company, city, state, accomplishment, to, from } =
    experience[experience[1] ? 1 : 0];

  return (
    <div className='display-section'>
      <div className='flex space-between align-center'>
        <div className='display-info'>
          <h2 className='fs-700 fw-bold'>Experience</h2>
          <p>{role || 'Role'}</p>
          <p>
            {company || 'Company'} - {city || 'City'}, {state || 'State'}
          </p>
          <p>{accomplishment || 'Accomplishments'}</p>
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
        {experience.map(
          (exp, index) =>
            index > 1 && (
              <li
                className='flex align-center gap-small'
                onClick={removeForm}
                data-name='experience'
                data-key={index}
              >
                {Object.values(exp).map((Exp, index) =>
                  index !== 0 ? formatLine(Exp) : Exp
                )}
                <VscClose className={CSS.svg} data-visible={canRemove} />
              </li>
            )
        )}
      </ul>
    </div>
  );
}
