import React, { useEffect } from 'react';
import { renderMap } from '../../utils';
const Map = () => {
  useEffect(() => {
    renderMap();
  }, []);
  return <div></div>;
};

export default Map;
