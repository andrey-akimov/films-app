import axios from 'axios';

const mainRequest = (page = 1) => dispatch => {
	axios
		.get(`https://api.themoviedb.org/4/discover/movie?sort_by=vote_average.desc&page=${page}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTJiYjRmYjRiNDM0OGViZTI5MWZiNGE1NDM0YmY2MSIsInN1YiI6IjVhYzVkZjk5MGUwYTI2NDk2ZTAwOTVjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eE37BzpA3v8VWdxU8jY9RMQ981eGnQLm7o44ZuyzJYc'
			}
		})
		.then(res => {
			const { results, page, total_pages } = res.data;
			dispatch({
				type: 'GET_MOVIES',
				payload: {
					movies: results,
					page: page,
					totalPages: total_pages
				}
			});
		})
		.catch(err => console.log(err));
};

export const getMovies = page => mainRequest(page);
