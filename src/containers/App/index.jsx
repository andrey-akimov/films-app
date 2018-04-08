import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions/index.js';
import './style.css';
import Header from '../../components/Header/index';
import List from '../List/index';

class App extends Component {
	// CDM
	componentDidMount() {
		this.props.dispatch(getMovies());
	}

	render() {
		const { page, totalPages } = this.props;
		return (
			<div className="App">
				<Header />
				{this.props.loading ? <h1>loading...</h1> : <List movies={this.props.movies} />}

				{/* Pagination */}
				{page > 1 ? (
					<button onClick={() => this.props.dispatch(getMovies(this.props.page - 1))}>
						Prev
					</button>
				) : null}
				{page < totalPages ? (
					<button onClick={() => this.props.dispatch(getMovies(this.props.page + 1))}>
						Next
					</button>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
