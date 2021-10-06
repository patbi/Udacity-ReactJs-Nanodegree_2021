import React from "react";
import { options } from "./Constants";

const OptionsList = options.map((product) => {
  return (
    <option key={product.key} disabled={product.disabled} value={product.key}>
      {product.value}
    </option>
  );
});
export default OptionsList;