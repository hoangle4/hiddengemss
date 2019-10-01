import { SET_CENTER, CLEAR_ERRORS, SET_CENTER_ERROR } from '../types';
export default (state, action) => {
	switch (action.type) {
		case SET_CENTER:
			return {
				...state,
				center: action.payload
			};
		case SET_CENTER_ERROR:
			return {
				...state,
				error: { msg: 'Location Not Found' }
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			};
		default:
			return state;
	}
};
