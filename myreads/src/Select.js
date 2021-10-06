import React from "react";
import { update } from "./BooksAPI";
import OptionsList from "./OptionsList";

export const Select = (props) => {
  const dropdownList = null;
  if (props.e.shelf !== undefined || props.e.shelf !== 'none') {
    dropdownList = (
         <select
            value={props.e.shelf ? props.e.shelf : "none"}
            onChange={(event) =>
              update(props.e, event.target.value).then(() =>
                props.shelfHandlerChange()
              )
            }
          >
		{ OptionsList }

		 </select>
    );
  } else {
    dropdownList = (
       <select
            value={"none"}
            onChange={(event) =>
              update(props.e, event.target.value).then(() =>
                props.shelfHandlerChange()
              )
            }
          >
            { OptionsList }
          </select>
    );
  }
  return <div className='book-shelf-changer'>{dropdownList}</div>;
};