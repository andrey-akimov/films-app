import React from 'react';
import './style.css';

const Movie = props => {
	return <div>{props.movie.original_title}</div>;
};

export default Movie;
