import React from "react";
import { update } from "./BooksAPI";
import OptionsList from "./OptionsList";

const Select = (props) => {
  const dropdownList = null;
  if (props.book.shelf !== undefined || props.book.shelf !== 'none') {
    dropdownList = (
         <select
            value={props.book.shelf ? props.book.shelf : "none"}
            onChange={(event) =>
              update(props.book, event.target.value).then(() =>
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
              update(props.book, event.target.value).then(() =>
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

export default Select;