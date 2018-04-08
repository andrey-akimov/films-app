import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import Movie from '../../components/Movie';

class List extends Component {
	state = {
		input: ''
	};

	inputHandler = e => {
		this.setState({ input: e.target.value });
	};

	render() {
		return (
			<div>
				<input type="text" onChange={this.inputHandler} defaultValue={this.state.value} />
				{this.props.movies.map(movie => {
					if (
						movie.original_title
							.toLowerCase()
							.indexOf(this.state.input.toLowerCase()) !== -1
					) {
						return <Movie key={movie.id} movie={movie} />;
					}
				})}
			</div>
		);
	}
}
const mapStateToProps = state => state;

export default connect(mapStateToProps)(List);
