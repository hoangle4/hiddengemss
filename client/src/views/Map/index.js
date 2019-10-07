import React, { useState, useContext, useEffect } from 'react';
import {
  renderMap,
  renderMarker,
  setPopup,
  generatePopupHTML
} from '../../utils';
import { Redirect } from 'react-router-dom';
import mapContext from '../../context/map/MapContext';
import AddLocationForm from './AddLocationForm';
import './Map.css';
const Map = () => {
  const MapContext = useContext(mapContext);
  useEffect(() => {
    if (mapContext.length !== 0)
      MapContext.gems.forEach(gem => {
        renderMarker(
          gem.gemCoord,
          map,
          setPopup(
            generatePopupHTML(
              gem.gemName,
              gem.gemDesc,
              gem.gemStory,
              gem.gemPhoto,
              gem._id
            )
          )
        );
      });
  }, []);
  const [openModal, setOpenModal] = useState(false);
  const [LngLat, setLngLat] = useState([]);
  // eslint-disable-next-line
  const [map, setMap] = useState(() => {
    if (MapContext.center.length === 0) return;
    return renderMap(MapContext.center).on('click', e => {
      if (
        e.originalEvent.target.nodeName !== 'path' &&
        e.originalEvent.target.nodeName === 'CANVAS'
      ) {
        setOpenModal(o => {
          setLngLat(e.lngLat);
          return !o;
        });
        setStateMarker(renderMarker(e.lngLat, map));
      }
    });
  });
  const [marker, setStateMarker] = useState();

  !openModal && marker && marker.remove();
  if (MapContext.center.length === 0) return <Redirect to='/' />;
  if (MapContext.gems.length === 0) return <Redirect to='/' />;
  return (
    <AddLocationForm
      openModal={openModal}
      closeModal={setOpenModal}
      gemCoord={LngLat}
    />
  );
};

export default Map;
