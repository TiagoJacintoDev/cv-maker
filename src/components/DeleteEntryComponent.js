import { useState } from "react";
import { VscClose } from "react-icons/vsc";

export default function DeleteEntryComponent({
  handleClick,
  name,
  formName,
  id,
  component: Component,
  ...props
}) {
  const [canRemoveFromList, setCanRemoveFromList] = useState(false);

  //TODO: function canInputBeDeleted

  return (
    <Component
      data-id={id}
      data-name={formName}
      onClick={handleClick}
      className={props.className}
      onMouseEnter={() => setCanRemoveFromList(true)}
      onMouseLeave={() => setCanRemoveFromList(false)}
    >
      {name}

      <VscClose data-visible={canRemoveFromList} className="svg" size={20} />
    </Component>
  );
}
