import { VscClose } from 'react-icons/vsc';
import { useState } from 'react';
import CSS from './DisplaySections.module.css';

export default function Skills({ formData, removeForm }) {
  const { skills } = formData;

  const [canRemove, setCanRemove] = useState(false);

  return (
    <div className='display-section'>
      <div className='display-info full-width'>
        <h2 className='fs-700 fw-bold'>Skills</h2>
        <div
          className='flex gap-small full-width flex-wrap'
          onMouseEnter={() => setCanRemove(true)}
          onMouseLeave={() => setCanRemove(false)}
        >
          {skills.map(
            (skill, index) =>
              skill.skill && (
                <button
                  onClick={removeForm}
                  className={`${CSS.button} flex align-center gap-small`}
                  data-name='skills'
                  data-key={index}
                >
                  {skill.skill}

                  <VscClose
                    data-visible={canRemove}
                    className={CSS.svg}
                    size={20}
                  />
                </button>
              )
          )}
        </div>
      </div>
    </div>
  );
}
