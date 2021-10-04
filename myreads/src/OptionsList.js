import React from "react";
import { options } from "./Constants";

const OptionsList = options.map((i) => {
  return (
    <option key={i.key} disabled={i.disabled} value={i.key}>
      {i.value}
    </option>
  );
});
export default OptionsList;