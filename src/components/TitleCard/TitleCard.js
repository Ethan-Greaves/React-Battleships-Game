import { Typography } from '@material-ui/core';
import React from 'react';

const TitleCard = ({ isHomePage }) => {
	return (
		<div>
			<Typography
				variant={isHomePage ? 'h1' : 'h2'}
				align="center"
				style={{ fontWeight: 'bold' }}>
				BATTLESHIPS
			</Typography>
			<Typography
				variant={isHomePage ? 'h6' : 'body1'}
				align="center"
				style={{
					fontStyle: 'italic',
					marginBottom: '40px',
					fontWeight: 'lighter',
				}}>
				<span style={{ fontStyle: 'normal' }}>⚓</span>
				The Ship Sinking Strategy Game
				<span style={{ fontStyle: 'normal' }}> ⚓</span>
			</Typography>
		</div>
	);
};

export default TitleCard;
