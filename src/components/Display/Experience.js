import React from 'react';

export default function Experience({ formData, formatLine }) {
  const { experience } = formData;

  const { role, company, city, state, accomplishment, to, from } =
    experience[experience[1] ? 1 : 0];

  return (
    <div className='display-section'>
      <div>
        <div className='display-info'>
          <h2 className='fs-700 fw-bold'>Experience</h2>
          <p>{role || 'Role'}</p>
          <p>
            {company || 'Company'} - {city || 'City'}, {state || 'State'}
          </p>
          <p>{accomplishment || 'Accomplishments'}</p>
        </div>
        <ul className='list'>
          {experience.map(
            (exp, index) =>
              index > 1 && (
                <li>
                  {Object.values(exp).map((Exp, index) =>
                    index !== 0 ? formatLine(Exp) : Exp
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
