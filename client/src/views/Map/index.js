import React, { useEffect, useState, useContext } from 'react';
import { renderMap } from '../../utils';
import { Redirect } from 'react-router-dom';
import mapContext from '../../context/map/MapContext';
const Map = () => {
	const [ map, setMap ] = useState();
	const [ clickedLocation, setClickedLocation ] = useState({});
	const MapContext = useContext(mapContext);

	useEffect(() => {
		if (MapContext.center.length === 0) return;
		setMap(renderMap(MapContext.center));
	}, []);
	if (map) map.on('click', (e) => setClickedLocation(e.latLng));
	if (MapContext.center.length === 0) return <Redirect to='/' />;

	return <div />;
};

export default Map;
