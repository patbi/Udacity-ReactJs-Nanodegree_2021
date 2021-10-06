import React from "react";
import Select from "./Select";
// import { update } from "./BooksAPI";
// import OptionsList from "./OptionsList";

function BookComponent(props) {
	return (
		<div>
			<li key={props.book.id}>
				<div className="book">
					<div className="book-top">
						<div
							className="book-cover"
							style={{
				              width: 128,
				              height: 193,
				              backgroundImage: `url("${
				                props.book.imageLinks && props.book.imageLinks.thumbnail
				              }")`,
				            }}
						></div>
						

						  <div className="book-shelf-changer">
				            <Select book={props.book} shelfHandlerChange={props.shelfHandlerChange} />
				          </div>

				          
					</div>
					<div className="book-title">{props.book.title}</div>
					<div className="book-authors">{props.book.authors}</div>
				</div>
			</li>
		</div>
	);
}

export default BookComponent;