import { Map } from 'mapbox-gl';
export const renderMap = () => {
	var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

	mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_API;
	const m = document.getElementById('root');
	m.style.width = '100vw';
	m.style.height = '100vh';
	return new Map({
		container: 'root',
		style: 'mapbox://styles/mapbox/streets-v11',
		zoom: 12,
		center: [ -122.6781832, 45.5195334 ]
	});
};

export const removeMap = (map) => {
	map.remove();
};
