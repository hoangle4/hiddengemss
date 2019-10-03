import React, { useEffect, useState, useContext } from 'react';
import { renderMap } from '../../utils';
import { Redirect } from 'react-router-dom';
import mapContext from '../../context/map/MapContext';
import AddLocationForm from './AddLocationForm';
import './Map.css';
const Map = () => {
  const [openModal, setOpenModal] = useState(false);
  const [map, setMap] = useState();
  const [clickedLocation, setClickedLocation] = useState({});

  const MapContext = useContext(mapContext);

  useEffect(() => {
    if (MapContext.center.length === 0) return;

    renderMap(MapContext.center).on('click', e => {
      MapContext.setCenter(e.lngLat);
      setOpenModal(o => !o);
    });
  }, []);

  if (MapContext.center.length === 0) return <Redirect to='/' />;

  return <AddLocationForm openModal={openModal} closeModal={setOpenModal} />;
};

export default Map;
