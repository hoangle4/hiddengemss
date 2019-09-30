import React, { useReducer, useEffect } from 'react';
import MapContext from './MapContext';
import mapReducer from './MapReducer';

import { SET_CENTER } from '../types';
const MapState = (props) => {
	const initialState = {
		center: [],
		loading: true,
		error: null
	};
	const [ state, dispatch ] = useReducer(mapReducer, initialState);

	return (
		<MapContext.Provider
			value={{
				center: state.center,
				loading: state.loading,
				error: state.error
			}}
		>
			{props.children}
		</MapContext.Provider>
	);
};
export default MapState;
