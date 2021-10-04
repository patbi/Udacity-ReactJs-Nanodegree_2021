import React from "react";
import BookDisplay from "./BookDisplay";

const ListBooks = (props) => {
  return (
    <ol className="books-grid">
      {props.books
        .filter((e) => e.shelf === props.shelf)
        .map((e, index) => {
          return (
            <BookDisplay key={index} e={e} shelfHandlerChange={props.shelfHandlerChange} />
          );
        })}
    </ol>
  );
};

export default ListBooks;