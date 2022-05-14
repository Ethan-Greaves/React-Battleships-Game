import { Typography } from '@material-ui/core';
import React from 'react';
import GameTitleImg from '../../assets/Battleship/PNG/game_title.png';
const TitleCard = ({ isHomePage }) => {
	return (
		<div>
			<Typography variant={isHomePage ? 'h1' : 'h2'} align="center" style={{ fontWeight: 'bold' }}>
				<img src={GameTitleImg} alt="Game Title" />
			</Typography>
			<Typography
				variant={isHomePage ? 'h6' : 'body1'}
				align="center"
				style={{
					fontStyle: 'italic',
					marginBottom: '20px',
					// fontWeight: 'lighter',
				}}>
				{/* <span style={{ fontStyle: 'normal' }}>⚓</span>
				The Ship Sinking Strategy Game
				<span style={{ fontStyle: 'normal' }}> ⚓</span> */}
			</Typography>
		</div>
	);
};

TitleCard.defaultProps = {
	isHomePage: false,
};

export default TitleCard;
