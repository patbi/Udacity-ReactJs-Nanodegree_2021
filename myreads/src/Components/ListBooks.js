import React from "react";

import PropTypes from "prop-types";

const options = [ 
  {
    label: "Currently Reading",
    value: "currentlyReading",
  },
  {
    label: "Want to Read",
    value: "wantToRead",
  },
  {
    label: "Read",
    value: "read",
  },
  {
    label: "None",
    value: "none",
  },
];

function ListBooks(props) {
	const shelfUpdateHandler = (e) => {
		props.clickShelfHandler(props.book, e.target.value);
	};	

	const img = props.book.imageLinks;
	let patbi;

	if (img) {
	   patbi = props.book.imageLinks.thumbnail;
	} else {
	   patbi = null;
	}


	return (
		<div>
			<li>
				<div className="book">
					<div className="book-top">
						<div
							className="book-cover"
							style={{
								width: 128,
								height: 193,
								backgroundImage: `url(${patbi})`,
							}}
						></div>
						<div className="book-shelf-changer">
							<select style = {{backgroundColor: '#7952B3', color: 'white'}} onChange={shelfUpdateHandler} value={props.book.shelf}>
								{options.map((option) => (
					              <option value={option.value}>{option.label}</option>
					            ))}
							</select>
						</div>
					</div>
					<div className="book-title">{props.book.title}</div>
					<div className="book-authors">{props.book.authors}</div>
				</div>
			</li>
		</div>
	);
}

ListBooks.propTypes = {
	clickShelfHandler: PropTypes.func.isRequired,
};

export default ListBooks;