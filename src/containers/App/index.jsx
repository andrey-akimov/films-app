import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import Header from '../Header/index';
import List from '../../components/List/index';

class App extends Component {
	state = {
		movies: [],
		page: 1,
		totalPages: 1
	};

	mainRequest = (page = 1) => {
		axios
			.get(
				`https://api.themoviedb.org/4/discover/movie?sort_by=vote_average.desc&page=${page}`,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization:
							'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTJiYjRmYjRiNDM0OGViZTI5MWZiNGE1NDM0YmY2MSIsInN1YiI6IjVhYzVkZjk5MGUwYTI2NDk2ZTAwOTVjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eE37BzpA3v8VWdxU8jY9RMQ981eGnQLm7o44ZuyzJYc'
					}
				}
			)
			.then(res => {
				const { results, page, total_pages } = res.data;
				this.setState({
					movies: results,
					page: page,
					totalPages: total_pages
				});
			})
			.catch(err => console.log(err));
	};

	nextPageHandler = () => {
		this.mainRequest(this.state.page + 1);
	};

	prevPageHandler = () => {
		this.mainRequest(this.state.page - 1);
	};

	componentDidMount() {
		this.mainRequest();
	}

	render() {
		const { page, totalPages } = this.state;
		return (
			<div className="App">
				<Header />
				<List movies={this.state.movies} />
				{page > 1 ? <button onClick={this.prevPageHandler}>Prev</button> : null}
				{page < totalPages ? <button onClick={this.nextPageHandler}>Next</button> : null}
			</div>
		);
	}
}

export default App;
