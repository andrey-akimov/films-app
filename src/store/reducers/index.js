const initialState = {
	movies: [],
	page: 1,
	totalPages: 1,
	loading: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_MOVIES':
			return {
				...action.payload,
				loading: false
			};
		case 'LOADING':
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
};

export default reducer;
