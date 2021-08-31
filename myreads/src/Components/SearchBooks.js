import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import * as BooksAPI from './../BooksAPI';

import ListBooks from './ListBooks';

import PropTypes from 'prop-types';

class SearchBooks extends Component {
	static propTypes = {
		mybooks: PropTypes.array.isRequired,
		onChange: PropTypes.func.isRequired,
		
	};
	

	render() {
		return (
			<div className='search-books'>
				
			</div>
		);
	}
}

export default SearchBooks;