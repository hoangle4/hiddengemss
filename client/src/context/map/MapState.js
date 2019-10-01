import React, { useReducer } from 'react';
import MapContext from './MapContext';
import mapReducer from './MapReducer';

import { SET_CENTER, SET_CENTER_ERROR } from '../types';
const MapState = (props) => {
	const initialState = {
		center: [],
		loading: true,
		error: null
	};
	const [ state, dispatch ] = useReducer(mapReducer, initialState);

	const setCenter = (latLng) => {
		try {
			dispatch({
				type: SET_CENTER,
				payload: latLng
			});
		} catch (error) {
			console.error(error.message);
			dispatch({
				type: SET_CENTER_ERROR
			});
		}
	};

	return (
		<MapContext.Provider
			value={{
				center: state.center,
				loading: state.loading,
				error: state.error,
				setCenter
			}}
		>
			{props.children}
		</MapContext.Provider>
	);
};
export default MapState;
