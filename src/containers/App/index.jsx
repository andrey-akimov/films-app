import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { getMovies } from '../../store/actions/index.js';
import './style.css';
import Header from '../Header/index';
import List from '../../components/List/index';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(getMovies());
	}

	render() {
		const { page, totalPages } = this.props;
		return (
			<div className="App">
				<Header />
				<List movies={this.props.movies} />
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
