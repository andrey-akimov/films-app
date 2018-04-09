import React, { Component } from 'react';
import { Grid, Icon, Input, Button } from 'semantic-ui-react';
import { getMovies } from '../../store/actions/index.js';
import './style.css';
import Movie from '../Movie/index';

class List extends Component {
	state = {
		input: ''
	};

	inputHandler = e => {
		this.setState({ input: e.target.value });
	};

	render() {
		// Styles
		const style = { width: '100%', marginTop: '25px' };

		const { page, totalPages } = this.props;
		return (
			<div className="container list">
				<Grid>
					{/* Input */}
					<Grid.Row centered columns={1}>
						<Grid.Column floated="left">
							<Input style={style} icon placeholder="Search...">
								<input
									className="input"
									placeholder="Find a film on the page"
									onChange={this.inputHandler}
									defaultValue={this.state.value}
								/>
								<Icon name="search" />
							</Input>
						</Grid.Column>
					</Grid.Row>

					{/* Movies */}
					<Grid.Row columns={2}>
						{this.props.movies.map(movie => {
							if (
								movie.original_title
									.toLowerCase()
									.indexOf(this.state.input.toLowerCase()) !== -1
							) {
								return <Movie key={movie.id} movie={movie} />;
							}
							return false;
						})}
					</Grid.Row>

					{/* Pagination */}
					<Grid.Row columns={2}>
						{page > 1 ? (
							<Grid.Column floated="left">
								<Button
									floated="left"
									icon
									labelPosition="left"
									onClick={() =>
										this.props.dispatch(getMovies(this.props.page - 1))
									}
								>
									Prev
									<Icon name="left arrow" />
								</Button>
							</Grid.Column>
						) : null}
						{page < totalPages ? (
							<Grid.Column floated="right">
								<Button
									floated="right"
									icon
									labelPosition="right"
									onClick={() =>
										this.props.dispatch(getMovies(this.props.page + 1))
									}
								>
									Next
									<Icon name="right arrow" />
								</Button>
							</Grid.Column>
						) : null}
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default List;
