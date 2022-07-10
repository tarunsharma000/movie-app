import React from 'react';
import { Link } from 'react-router-dom';

const MovieListHeading = (props) => {
	return (
		<div className='col'>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;