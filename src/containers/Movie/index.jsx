import React, { Component, Fragment } from 'react';
import { Grid, Modal, Image, Button } from 'semantic-ui-react';
import './style.css';

class Movie extends Component {
	state = {
		openModal: false
	};

	openModal = () => this.setState({ openModal: true });

	closeModal = () => this.setState({ openModal: false });

	render() {
		const { title, id, overview, poster_path } = this.props.movie;
		const imgPath = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`;

		return (
			<Fragment>
				<Grid.Column onClick={this.openModal} key={id}>
					<Button className="movie">
						{title.length < 50 ? title : title.slice(0, 50) + ' ...'}
					</Button>
				</Grid.Column>

				{/* Modal */}
				<Modal
					open={this.state.openModal}
					onOpen={this.openModal}
					onClose={this.closeModal}
				>
					<Modal.Header style={{ textAlign: 'center' }}>{title}</Modal.Header>
					<Modal.Content image>
						<Image size="big" src={imgPath} />
						<Modal.Description>
							<p>{overview}</p>
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button
							onClick={this.closeModal}
							positive
							icon="checkmark"
							labelPosition="right"
							content="Ok"
						/>
					</Modal.Actions>
				</Modal>
			</Fragment>
		);
	}
}

export default Movie;
