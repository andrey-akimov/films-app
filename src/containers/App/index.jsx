import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import { getMovies } from '../../store/actions/index.js';
import './style.css';
import PageHeader from '../../components/PageHeader/index';
import List from '../List/index';

class App extends Component {
	// CDM
	componentDidMount() {
		this.props.dispatch(getMovies());
	}

	render() {
		return (
			<div className="App">
				<PageHeader />
				{this.props.loading ? (
					<Dimmer active>
						<Loader size="massive">Loading</Loader>
					</Dimmer>
				) : (
					<List {...this.props} />
				)}
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
