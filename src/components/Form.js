import { upperFirst, split, camelCase } from 'lodash';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { VscTrash } from 'react-icons/vsc';

export default function Form({ formData, formName, setFormData }) {
  console.log(formData);
  const formInputs = [
    {
      name: 'general',
      inputs: [
        'first-name',
        'last-name',
        'occupation',
        'phone',
        'email',
        'github',
        'linkedin',
      ],
    },
    {
      name: 'experience',
      inputs: [
        'company',
        'role',
        'city',
        'state',
        'from',
        'to',
        'accomplishment',
      ],
    },
    {
      name: 'skills',
      inputs: ['skill'],
    },
    {
      name: 'education',
      inputs: [
        'school-name',
        'degree',
        'city',
        'state',
        'from',
        'to',
        'achievements',
      ],
    },
  ];

  const currentForm = formInputs.find(form => form.name === formName);

  function getInputValue(inputName) {
    const formArray = formData[currentForm.name];
    return formArray[0][camelCase(inputName)];
  }

  function changeFormInputValue(e) {
    setFormData(oldFormData => ({
      ...oldFormData,
      [currentForm.name]: oldFormData[currentForm.name].map((form, index) => {
        return index === 0
          ? { ...form, [camelCase(e.target.name)]: e.target.value }
          : form;
      }),
    }));
  }

  function clearInputs(e) {
    e.preventDefault();
    e.target.childNodes.forEach(children => (children.value = ''));
  }

  function addForm() {
    setFormData(oldFormData => ({
      ...oldFormData,
      [currentForm.name]: [{}, ...oldFormData[currentForm.name]],
    }));
  }

  function removeAllForms() {
    setFormData(oldFormData => ({
      ...oldFormData,
      [currentForm.name]: [{}],
    }));
  }

  const formsHaveAddButton = ['experience', 'skills', 'education'];
  return (
    <form className='long-form' onSubmit={clearInputs}>
      {currentForm.inputs.map(inputName => (
        <input
          className='input'
          type='text'
          value={getInputValue(inputName)}
          onChange={changeFormInputValue}
          name={inputName}
          placeholder={upperFirst(
            split(inputName, '-').toString().replace(',', ' ')
          )}
        />
      ))}
      {formsHaveAddButton.includes(currentForm.name) && (
        <>
          <button onClick={addForm} className='button' data-type='add'>
            <MdOutlineLibraryAdd size={20} /> Add{' '}
            {currentForm.inputs[currentForm.inputs.length - 1]}
          </button>
          <button
            onClick={removeAllForms}
            className='button'
            data-type='delete'
          >
            <VscTrash size={20} /> Remove All
          </button>
        </>
      )}
    </form>
  );
}
