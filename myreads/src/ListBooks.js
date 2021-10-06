import React from "react";
import BookComponent from "./BookComponent";

const ListBooks = (props) => {
  return (
    <ol className="books-grid">
      {props.books
        .filter((book) => book.shelf === props.shelf)
        .map((book, index) => {
          return (
            <BookComponent
            	 key={index}
            	 book={book} 
            	 shelfHandlerChange={props.shelfHandlerChange}
             />
          );
        })}
    </ol>
  );
};

export default ListBooks;