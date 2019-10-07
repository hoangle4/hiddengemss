import {
  SET_CENTER,
  CLEAR_ERRORS,
  SET_CENTER_ERROR,
  GET_GEM,
  GET_GEM_ERROR
} from '../types';
export default (state, action) => {
  switch (action.type) {
    case GET_GEM:
      return {
        ...state,
        gems: action.payload,
        loading: false
      };
    case SET_CENTER:
      return {
        ...state,
        center: action.payload
      };
    case SET_CENTER_ERROR:
    case GET_GEM_ERROR:
      return {
        ...state,
        error: action.payload.msg
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
