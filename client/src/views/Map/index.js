import React, { useEffect, useState, useContext } from 'react';
import { renderMap, renderMarker } from '../../utils';
import { Redirect } from 'react-router-dom';
import mapContext from '../../context/map/MapContext';
import AddLocationForm from './AddLocationForm';
import './Map.css';
const Map = () => {
  const MapContext = useContext(mapContext);
  const [openModal, setOpenModal] = useState(false);
  const [LngLat, setLngLat] = useState([]);

  const [map, setMap] = useState(() => {
    if (MapContext.center.length === 0) return;
    return renderMap(MapContext.center).on('click', e => {
      setOpenModal(o => {
        return !o;
      });
      setStateMarker(renderMarker(e.lngLat, map));
    });
  });
  const [marker, setStateMarker] = useState(() => {
    if (LngLat.length === 0) return;
    return renderMarker(LngLat, map);
  });

  !openModal && marker && marker.remove();
  if (MapContext.center.length === 0) return <Redirect to='/' />;

  return <AddLocationForm openModal={openModal} closeModal={setOpenModal} />;
};

export default Map;
