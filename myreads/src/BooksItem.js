import React from "react";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import ListBooks from "./ListBooks";
import { options } from "./Constants";

const BooksItem = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
      <Container fluid
		style={{
		  backgroundColor: '#7952B3',
		  fontWeight: 400,
		  marginBottom: 50,
		  color: 'white'
		}}>
        <h1>MyReads</h1>
        </Container>
      </div>
      <div className="list-books-content">
        <div>
          {options.slice(1, 4).map((e) => {
            return (
              <div key={e.key} className="bookshelf">
                <h2 className="bookshelf-title">{e.value}</h2>
                <div className="bookshelf-books">
                  <ListBooks
                    books={props.books}
                    shelf={e.key}
                    shelfHandlerChange={props.shelfHandlerChange}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="open-search">
        <Link to="/eye">Add a book</Link>
      </div>
    </div>
  );
};

export default BooksItem;