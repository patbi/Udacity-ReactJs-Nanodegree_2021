import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'

import BookComponent from "./BookComponent";


class SearchBooks extends Component {
 constructor(props) {
    super(props);
    this.state = {
      results: [],
      error : ''
    };
    this.searchresults = this.searchresults.bind(this);
  }

	searchresults = async (searchTerm) => {
	await this.setState({
      searchTerm : searchTerm
    })
    if (searchTerm.target.value === "") {
    	this.setState((currentState) => {
          currentState.results = [];
        })
    } else {
    	BooksAPI
    	.search(searchTerm.target.value, 30)
    	.then((data) => {
          this.setState((currentState) => {
            if (data.hasOwnProperty('error')) {
              this.setState({
            	results : [],
            	error : 'No results found, please try another query.'
          })
            } else {
              return {
                error : null,
                results : data
              };

            }
          });
        });
    }      
  };;	
	
	render() {		
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
			              {this.state.results.map((book, index) => {
			                return (
			                  <BookComponent
			                    key={index}
			                    book={book}
			                    shelf={book.key}
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