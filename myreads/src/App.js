import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getAll, update } from './BooksAPI';
import BooksItem from './BooksItem';
import SearchBooks from './SearchBooks';

import './App.css';


class BookApp extends Component {
  state = { 
    books: [],
  };

  componentDidMount = () => {
    let delay = Math.floor(Math.random() * 5000)
      setTimeout(() => {
        getAll()
          .then(
            (books) => this.setState(
              {books: [...books]}
            ))
      }, delay)
  }

  shelfHandlerChange = (bookId, shelf) => { 
    update(bookId, shelf)
        .then(() => (
         shelf !== 'none' 
         ? alert(`${bookId.authors} add successfully`) 
         : null ))
        .catch(() => alert('Bad request')); };

  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route 
              exact
              path='/'
              render={(props) => <BooksItem books={this.state.books}
              onChange={this.shelfHandlerChange}
              />
            }
         />
            <Route 
              path='/eye'
              render={(props) => <SearchBooks mybooks={this.state.books}
              onChange={this.shelfHandlerChange}
             />
            }
          />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default BookApp;