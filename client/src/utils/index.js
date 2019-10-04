import { Map, Marker } from 'mapbox-gl';
import axios from 'axios';
export const renderMap = latLng => {
  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

  mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_API;
  const m = document.getElementById('root');
  m.style.width = '100vw';
  m.style.height = '100vh';
  return new Map({
    container: 'root',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 12,
    center: latLng
  });
};

export const renderMarker = (latLng, map) => {
  return new Marker().setLngLat(latLng).addTo(map);
};

export const setAuthToken = authToken => {
  if (authToken) {
    axios.defaults.headers.common['x-auth-token'] = authToken;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};
