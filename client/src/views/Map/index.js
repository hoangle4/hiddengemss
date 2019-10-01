import React, { useEffect, useState, useContext } from 'react';
import { renderMap } from '../../utils';
import { Redirect } from 'react-router-dom';
import mapContext from '../../context/map/MapContext';
import AddLocationForm from './AddLocationForm';
import './Map.css';
const Map = () => {
	const [ openModal, setOpenModal ] = useState(false);
	const [ map, setMap ] = useState();
	const [ clickedLocation, setClickedLocation ] = useState({});
	useEffect(
		() => {
			setOpenModal(openModal);
		},
		[ openModal ]
	);

	const MapContext = useContext(mapContext);

	useEffect(() => {
		if (MapContext.center.length === 0) return;
		setMap(renderMap(MapContext.center));
	}, []);
	if (map)
		map.on('click', (e) => {
			setClickedLocation(e.latLng);
			setOpenModal(!openModal);
		});
	if (MapContext.center.length === 0) return <Redirect to='/' />;

	return <AddLocationForm openModal={openModal} />;
};

export default Map;
