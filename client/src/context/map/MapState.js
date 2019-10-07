import React, { useReducer, useEffect } from 'react';
import MapContext from './MapContext';
import mapReducer from './MapReducer';
import gemAPI from '../../API/gem';

import { SET_CENTER, SET_CENTER_ERROR, GET_GEM, GET_GEM_ERROR } from '../types';
const MapState = props => {
  useEffect(() => {
    getGem();
  }, []);
  const initialState = {
    gems: [],
    center: [],
    loading: true,
    error: null
  };
  const [state, dispatch] = useReducer(mapReducer, initialState);

  const setCenter = latLng => {
    try {
      dispatch({
        type: SET_CENTER,
        payload: latLng
      });
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: SET_CENTER_ERROR,
        payload: { msg: 'COORDINATES NOT FOUND' }
      });
    }
  };

  const getGem = async () => {
    try {
      const result = await gemAPI.getAllGem();
      console.log(result);
      dispatch({
        type: GET_GEM,
        payload: result.data
      });
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: GET_GEM_ERROR,
        payload: { msg: 'GEM NOT FOUND' }
      });
    }
  };

  return (
    <MapContext.Provider
      value={{
        gems: state.gems,
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
