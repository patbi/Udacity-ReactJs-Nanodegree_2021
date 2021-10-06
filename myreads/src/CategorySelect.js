import React from "react";
import { update } from "./BooksAPI";
import OptionsList from "./OptionsList";
// import { Select } from "./Select";

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
						

						  <div className="book-shelf-changer">
				            {props.e.shelf !== undefined || props.e.shelf !== 'none' ? (
							    <select
							      value={props.e.shelf ? props.e.shelf : "none"}
							      onChange={(event) =>
							        update(props.e, event.target.value).then(() =>
							          props.shelfHandlerChange()
							        )
							      }
							    >
							      {OptionsList}
							    </select>
							  ) : (
							    <select
							      value={"none"}
							      onChange={(event) =>
							        update(props.e, event.target.value).then(() =>
							          props.shelfHandlerChange()
							        )
							      }
							    >
							      {OptionsList}
							    </select>
							  )} 
				          </div>

				          
					</div>
					<div className="book-title">{props.e.title}</div>
					<div className="book-authors">{props.e.authors}</div>
				</div>
			</li>
		</div>
	);
}

export default CategorySelect;