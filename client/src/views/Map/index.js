import React, { useEffect, useState } from 'react';
import { renderMap, removeMap } from '../../utils';
const Map = () => {
  const [map, setMap] = useState();
  useEffect(() => {
    setMap(renderMap());
    return () => {
      removeMap(map);
      console.log('removed');
    };
  }, []);
  return <div></div>;
};

export default Map;
