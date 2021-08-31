import React from "react";

import PropTypes from "prop-types";

function ListBooks(props) {
	const shelfUpdateHandler = (e) => {
		props.clickShelfHandler(props.book, e.target.value);
	};

	const img = props.book.imageLinks ? props.book.imageLinks.thumbnail : null;

	return (
		<div>
			
		</div>
	);
}

ListBooks.propTypes = {
	clickShelfHandler: PropTypes.func.isRequired,
};

export default ListBooks;