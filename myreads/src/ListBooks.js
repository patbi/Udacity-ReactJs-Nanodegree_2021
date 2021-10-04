import React from "react";
import CategorySelect from "./CategorySelect";

const ListBooks = (props) => {
  return (
    <ol className="books-grid">
      {props.books
        .filter((e) => e.shelf === props.shelf)
        .map((e, index) => {
          return (
            <CategorySelect
            	 key={index}
            	 e={e} 
            	 shelfHandlerChange={props.shelfHandlerChange}
             />
          );
        })}
    </ol>
  );
};

export default ListBooks;