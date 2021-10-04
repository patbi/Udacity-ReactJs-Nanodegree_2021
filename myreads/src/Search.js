import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';

import BookDisplay from "./BookDisplay";


class SearchBooks extends Component {
 constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
    this.searchresults = this.searchresults.bind(this);
  }

	searchresults = (e) => {
    e.target.value === ""
      ? this.setState((prevState) => {
          prevState.books = [];
        })
      : BooksAPI.search(e.target.value, 30).then((data) => {
          this.setState((prevState) => {
            if (data.error) {
              prevState.error = data.error;
            } else {
              prevState.error = undefined;
              prevState.books = data;
            }
          });
        });
  };

	
	
	render() {
		const { Books, searchError } = this.state;
		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<Link to='/' className='close-search'>
						Close
					</Link>
					<div className='search-books-input-wrapper'>
						<input 
							autoFocus
							type='text'
							placeholder='Search books by title or author'
							onChange={this.searchresults} />
					</div>
				</div>
				<div className='search-books-results'>
					{this.state.error ? (
			            <p>{this.state.error}</p>
			          ) : (
			            <ol className="books-grid">
			              {this.state.books.map((e, index) => {
			                return (
			                  <BookDisplay
			                    key={index}
			                    e={e}
			                    shelf={e.key}
			                    shelfHandlerChange={this.props.shelfHandlerChange}
			                  />
			                );
			              })}
			            </ol>
			          )}
				</div>
			</div>
		);
	}
}


export default SearchBooks;