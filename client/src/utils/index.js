import { Map, Marker, Popup } from 'mapbox-gl';
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

export const renderMarker = (latLng, map, popup) => {
  return new Marker()
    .setLngLat(latLng)
    .setPopup(popup)
    .addTo(map);
};

export const setPopup = html => {
  return new Popup({ closeButton: true }).setHTML(html);
};

export const generatePopupHTML = (name, desc, story, photo, id) => {
  return `<div className='card'>
            <img src='${photo}' className='card-img-top' alt='${name}' />
            <div className='card-body'>
              <h5 className='card-title'>${name}</h5>
              <small className='card-text text-muted'>${desc}</small>
              <p className='card-text'>${story}</p>
              <a href='/gem/${id}' className='btn'>
                Read more.
              </a>
            </div>
          </div>
          `;
};

export const setAuthToken = authToken => {
  if (authToken) {
    axios.defaults.headers.common['x-auth-token'] = authToken;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};
