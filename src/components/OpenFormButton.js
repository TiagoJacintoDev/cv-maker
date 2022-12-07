import { upperFirst } from "lodash";
import { MdArrowDropDown, MdArrowRight } from "react-icons/md";

export default function OpenFormButton({
  form,
  handleClick,
  openedForms,
  ...props
}) {
  return (
    <button
      className={props.className}
      data-name={form.name}
      onClick={handleClick}
    >
      {openedForms.includes(form.name) ? (
        <MdArrowDropDown className="svg" size={30} />
      ) : (
        <MdArrowRight className="svg" size={30} />
      )}
      {upperFirst(form.name)}
      {form.icon}
    </button>
  );
}
