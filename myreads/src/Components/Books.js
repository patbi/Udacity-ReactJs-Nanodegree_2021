import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import ListBooks from './ListBooks';

import { PropTypes } from 'prop-types';

class Books extends Component {
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

export default Books;