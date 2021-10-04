import React from "react";
import { update } from "./BooksAPI";
import OptionsList from "./OptionsList";

const Select = (props) => {
  return (
    <div className="book-shelf-changer">
	    {props.e.shelf !== undefined || props.e.shelf !== 'none' ? (
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
        ) : (
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
        )}
	</div>
  );
};

export default Select;