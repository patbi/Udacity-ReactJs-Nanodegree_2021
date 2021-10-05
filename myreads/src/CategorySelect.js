import React from "react";
import Select from "./Select";

function CategorySelect(props) {
	return (
		<div>
			<li key={props.e.id}>
				<div className="book">
					<div className="book-top">
						<div
							className="book-cover"
							style={{
				              width: 128,
				              height: 193,
				              backgroundImage: `url("${
				                props.e.imageLinks && props.e.imageLinks.thumbnail
				              }")`,
				            }}
						></div>
						{ Select }
					</div>
					<div className="book-title">{props.e.title}</div>
					<div className="book-authors">{props.e.authors}</div>
				</div>
			</li>
		</div>
	);
}

export default CategorySelect;