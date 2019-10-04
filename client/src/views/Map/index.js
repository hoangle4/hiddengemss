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
      // setMarker(e.lngLat);
    });
  });
  const [marker, setStateMarker] = useState(renderMarker(LngLat, map));
  // const setMarker = lnglat => {
  //   setStateMarker(() => {
  //     return renderMarker(lnglat, map);
  //   });
  // };

  const removeMarker = () => {
    console.log(marker);
  };
  if (marker) console.log(marker.remove());
  if (MapContext.center.length === 0) return <Redirect to='/' />;

  return <AddLocationForm openModal={openModal} closeModal={setOpenModal} />;
};

export default Map;
