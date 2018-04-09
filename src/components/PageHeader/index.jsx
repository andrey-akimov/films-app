import React from 'react';
import { Header, Image, Grid } from 'semantic-ui-react';
import './style.css';

const PageHeader = () => {
	return (
		<div className="page-header">
			<div className="page-header__top">
				<div className="container">
					<Grid columns={2}>
						<Grid.Row>
							<Grid.Column>
								<div className="logo">
									<Image
										href="/"
										floated="left"
										src="http://logolagoon.com/wp-content/uploads/2013/11/Film-Camera-Logo-1.png"
									/>
								</div>
							</Grid.Column>
							<Grid.Column>
								<a href="/" className="users-account">
									<Header as="h2" floated="right">
										<Image
											avatar
											src="data:image/png;base64,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"
										/>{' '}
										Username
									</Header>
								</a>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</div>
			<div className="header-cover" />
		</div>
	);
};

export default PageHeader;
