import React, { useEffect, useState } from 'react';
import { renderMap, removeMap } from '../../utils';
const Map = () => {
	const [ map, setMap ] = useState();
	useEffect(() => {
		setMap(renderMap());
		return () => {
			removeMap(map);
			console.log('removed');
			//eslint-skip-next-line
		};
	}, []);
	return <div />;
};

export default Map;
