import React from 'react';
import './style.css';
import Movie from '../Movie/index';

const List = props => {
	return <div>{props.movies.map(movie => <Movie key={movie.id} movie={movie} />)}</div>;
};

export default List;
