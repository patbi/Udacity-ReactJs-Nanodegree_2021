import React from "react";
import Select from "./Select";
// import * as BooksAPI from './BooksAPI'
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
						

						  
				            <Select 
				            	book={props.book}
				            	shelfHandlerChange={props.shelfHandlerChange}
				             />
				          

				          
					</div>
					<div className="book-title">{props.book.title}</div>
					<div className="book-authors">{props.book.authors}</div>
				</div>
			</li>
		</div>
	);
}

export default BookComponent;