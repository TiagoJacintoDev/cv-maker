import CSS from "./OpenForm.module.css";
import { useState } from "react";
import { MdArrowRight, MdArrowDropDown } from "react-icons/md";
import { forms } from "../data/typeOfForms";
import { upperFirst } from "lodash";
import Form from "./Form";
import OpenFormButton from "./OpenFormButton";

export default function Forms({ formDisplayData, setFormDisplayData }) {
  const [openedForms, setOpenedForms] = useState([]);

  function switchFormOpenState(e) {
    openedForms.includes(e.target.dataset.name)
      ? setOpenedForms((lastFormsOpened) =>
          lastFormsOpened.filter(
            (formName) => formName !== e.target.dataset.name
          )
        )
      : setOpenedForms((lastFormsOpened) => [
          ...lastFormsOpened,
          e.target.dataset.name,
        ]);
  }

  return (
    <div className={`card space-between-dsk ${CSS.forms} scrollable`}>
      {forms.map((form) => (
        <div className="flex-column grouped-form" key={form.name}>
          <OpenFormButton
            form={form}
            openedForms={openedForms}
            className={CSS.openFormButton}
            handleClick={switchFormOpenState}
          />
          {openedForms.includes(form.name) && (
            <Form
              formName={form.name}
              formDisplayData={formDisplayData}
              setFormDisplayData={setFormDisplayData}
            />
          )}
        </div>
      ))}
    </div>
  );
}
