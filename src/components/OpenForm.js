import CSS from './OpenForm.module.css';
import { useState } from 'react';
import { MdArrowRight, MdArrowDropDown } from 'react-icons/md';
import { forms } from '../data/typeOfForms';
import { upperFirst } from 'lodash';
import Form from './Form';

export default function OpenForm({ formData, setFormData }) {
  const [formsOpened, setFormsOpened] = useState([]);

  function switchFormOpenState(e) {
    formsOpened.includes(e.target.dataset.name)
      ? setFormsOpened(lastFormsOpened =>
          lastFormsOpened.filter(formName => formName !== e.target.dataset.name)
        )
      : setFormsOpened(lastFormsOpened => [
          ...lastFormsOpened,
          e.target.dataset.name,
        ]);
  }

  return (
    <div className='container'>
      <div className='card'>
        {forms.map(form => (
          <>
            <button
              className={CSS.openFormButton}
              data-name={form.name}
              onClick={switchFormOpenState}
            >
              {formsOpened.includes(form.name) ? (
                <MdArrowDropDown className='svg' size={30} />
              ) : (
                <MdArrowRight className='svg' size={30} />
              )}
              {upperFirst(form.name)}
              {form.icon}
            </button>
            {formsOpened.includes(form.name) && (
              <Form
                formName={form.name}
                formData={formData}
                setFormData={setFormData}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
