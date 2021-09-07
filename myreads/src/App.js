import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as BooksAPI from './BooksAPI';
import Books from './Components/Books';
import SearchBooks from './Components/SearchBooks';

import './App.css';


class App extends Component {
  state = { 
    books: [],
  };

  componentDidMount = () => {
    let delay = Math.floor(Math.random() * 5000)

      setTimeout(() => {
        BooksAPI.getAll().then((books) => {
        this.setState({ books });
        });
      }, delay)
    }


  shelfHandlerChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf;
        this.setState((currentState) => ({
          books: currentState.books.filter((c) => c.id !== book.id).concat(book),
        }));
      })
      .then(() => (
           shelf !== 'none' ? alert(`${book.authors} add successfully`) : null)           
      )
      .catch(() => alert('Bad request'));
  };

  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path='/' render={(props) => <Books {...props} books={this.state.books} onChange={this.shelfHandlerChange} />} />
            <Route path='/search' render={(props) => <SearchBooks {...props} mybooks={this.state.books} onChange={this.shelfHandlerChange} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
