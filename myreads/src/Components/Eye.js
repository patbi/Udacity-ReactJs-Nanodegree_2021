import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import * as BooksAPI from './../BooksAPI';

import Catalogue from './Catalogue';

import PropTypes from 'prop-types';

class Eye extends Component {
	static propTypes = {
		checklists: PropTypes.array.isRequired,
		onChange: PropTypes.func.isRequired,
		
	};

	state = {
		Lists: [],
		request: '',
		err: false,
	};

	manager = (e) => {
		let request = e.target.value;
		this.setState(() => ({
			request: request
		}));
		this.supManager(request);
	};

	supManager = (request) => {
		if (request) {
			BooksAPI.search(request).then((Lists) => {
				if (Lists.length > 0) {
					Lists = this.managerChangeHandler(Lists);
					this.setState(() => ({
						Lists: Lists,
						err: false,
					}));
				} else {
					this.setState(() => ({
						Lists: [],
						err: true,
					}));
				}
			});
		} else {
			this.setState((currentState) => ({
				Lists: currentState.Lists,
				err: false,
			}));
		}
	};


	managerChangeHandler = (Lists) => {
		let checklists = this.props.checklists;		

		for (const list of Lists) {
		    list.shelf = 'none';
		    for (const myChecklist of checklists) {
		    	if (myChecklist.id === list.id) {
					list.shelf = myChecklist.shelf;
				}
			}			
		};
		return Lists;
	};

	
	render() {
		const { Lists, err } = this.state;
		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<Link to='/' className='close-search'>
						Close
					</Link>
					<div className='search-books-input-wrapper'>
						<input autoFocus type='text' placeholder='Search books by title or author' value={this.state.request} onChange={this.manager} />
					</div>
				</div>
				<div className='search-books-results'>
					{Lists.length > 0 && (
						<div>
							<ol className='books-grid'>
								{Lists.map((list) => (
									<Catalogue key={list.id} list={list} clickShelfHandler={this.props.onChange} />
								))}
							</ol>
						</div>
					)}
					{err && <div> No Books Available </div>}
				</div>
			</div>
		);
	}
}


export default Eye;