import { upperFirst } from "lodash";

export function parseCamelCase(string) {
  const splittedString = string.split(/(?=[A-Z][^A-Z])/);

  const editedString = splittedString.map((string, index) =>
    index === 0 ? upperFirst(string) : string.toLowerCase()
  );

  return editedString.toString().replace(/,/g, " ");
}
