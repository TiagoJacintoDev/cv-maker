import { MdOutlineLibraryAdd } from "react-icons/md";
import { VscTrash } from "react-icons/vsc";
import { formInputs } from "../data/formInputs";
import { parseCamelCase } from "../helpers/regexFunctions";
import CVActionButton from "./CVActionButton";

export default function Form({
  formDisplayData,
  formName,
  setFormDisplayData,
}) {
  const selectedFormInputs = formInputs.find((form) => form.name === formName);

  function getInputValue(inputName) {
    const currentForm = formDisplayData[formName];
    return currentForm[0][inputName];
  }

  function changeFormInputValue(e) {
    setFormDisplayData((lastFormDisplayData) => ({
      ...lastFormDisplayData,
      [formName]: lastFormDisplayData[formName].map((form, index) => {
        return index === 0
          ? { ...form, [e.target.name]: e.target.value }
          : form;
      }),
    }));
  }

  function clearInputs(e) {
    e.preventDefault();
    e.target.childNodes.forEach((children) => (children.value = ""));
  }

  function addForm() {
    setFormDisplayData((lastFormDisplayData) => ({
      ...lastFormDisplayData,
      [formName]: [{}, ...lastFormDisplayData[formName]],
    }));
  }

  function removeAllForms() {
    setFormDisplayData((lastFormDisplayData) => ({
      ...lastFormDisplayData,
      [formName]: [{}],
    }));
  }

  const formsHaveAddButton = ["experience", "skills", "education"];
  return (
    <form className="long-form" onSubmit={clearInputs}>
      {selectedFormInputs.inputs.map((inputName) => (
        <input
          key={inputName}
          className="input"
          type="text"
          value={getInputValue(inputName)}
          onChange={changeFormInputValue}
          name={inputName}
          placeholder={parseCamelCase(inputName)}
        />
      ))}
      {formsHaveAddButton.includes(formName) && (
        <div className="flex gap-small">
          <CVActionButton handleClick={addForm} type="add">
            <MdOutlineLibraryAdd size={20} /> Add
          </CVActionButton>

          <CVActionButton handleClick={removeAllForms} type="delete">
            <VscTrash size={20} /> Remove All
          </CVActionButton>
        </div>
      )}
    </form>
  );
}
