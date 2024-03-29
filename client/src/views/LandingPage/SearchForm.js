import React, { useState, useContext, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import mapContext from '../../context/map/MapContext';
const SearchForm = () => {
	const [ cityInput, setCityInput ] = useState('');
	const [ stateInput, setStateInput ] = useState('');
	const [ zipcodeInput, setZipcodeInput ] = useState('');
	const [ latLngFound, setlatLngFound ] = useState(false);
	const MapContext = useContext(mapContext);

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const results = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${cityInput},${stateInput},${zipcodeInput}&key=${process
				.env.REACT_APP_GOOGLE_MAP_API}`,
			{
				method: 'GET'
			}
		);
		const latLng = await results.json();
		if (!latLng) return { msg: 'Location Not Found' };

		MapContext.setCenter(latLng.results[0].geometry.location);
		setlatLngFound(true);
	};
	if (latLngFound) return <Redirect to='/map' />;
	return (
		<Fragment>
			<form onSubmit={handleFormSubmit} className='Landing-search-form'>
				<input
					required
					name='cityInput'
					type='text'
					className='Landing-searchbox'
					id='Landing-searchbox-city'
					placeholder='Enter City - Example: Portland '
					value={cityInput}
					onChange={(e) => setCityInput(e.target.value)}
				/>
				<input
					required
					name='stateInput'
					type='text'
					className='Landing-searchbox'
					id='Landing-searchbox-state'
					placeholder='Enter State - Example: OR'
					value={stateInput}
					onChange={(e) => setStateInput(e.target.value)}
				/>
				<input
					name='zipcodeInput'
					type='number'
					className='Landing-searchbox'
					id='Landing-searchbox-zipcode'
					placeholder='Zipcode (Optional)'
					value={zipcodeInput}
					onChange={(e) => setZipcodeInput(e.target.value)}
				/>
				<button type='submit' className='Landing-search-button'>
					Search
				</button>
			</form>
		</Fragment>
	);
};
export default SearchForm;
