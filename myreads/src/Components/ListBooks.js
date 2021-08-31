import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import ListBooksView from './ListBooksView';

import { PropTypes } from 'prop-types';

class ListBooks extends Component {
	static propsTypes = {
		books: PropTypes.array.isRequired,
		onChange: PropTypes.func.isRequired,
	};

	

	render() {
		
		return (
			<div className='list-books'>
				
			</div>
		);
	}
}

export default ListBooks;