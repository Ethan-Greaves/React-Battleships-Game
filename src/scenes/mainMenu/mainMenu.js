import { Typography, Grid, Button, Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import MainMenuStyles from './mainMenuStyles';
import { Link } from 'react-router-dom';
import musicFile from '.././../assets/music/468542__ddmyzik__civil-war-field-loop.wav';
import useAudio from '../../hooks/useAudio';
import YourShip from '../../components/YourShip/YourShip';
import YourShips from '../../components/YourShips/YourShips';
import CustomButton from '../../components/CustomButton/CustomButton';

const MainMenu = () => {
	// const [playing, toggle] = useAudio(musicFile, true);

	const [multiplayerButtonText, setMPButtonText] = useState('Multiplayer');

	useEffect(() => {
		// toggle();
	}, []);

	const setGameMode = () => {};

	const closeTab = () => {
		window.open('', '_self').close();
	};

	return (
		<div>
			{/* <Button onClick={startMusic}>Play Music</Button> */}

			<Grid
				container
				spacing={2}
				direction="column"
				alignItems="center"
				justifyContent="center"
				justify="center"
				style={{ minHeight: '100vh' }}>
				<Typography variant="h1" align="center" gutterBottom>
					BATTLESHIPS
				</Typography>
				<Grid item>
					<Link to="/setupBoard">
						<CustomButton text="Singleplayer" />
					</Link>
				</Grid>
				<Grid item>
					<Button
						color="primary"
						variant="contained"
						onMouseOver={() => setMPButtonText('Coming Soon!')}
						onMouseLeave={() => setMPButtonText('Multiplayer')}>
						{multiplayerButtonText}
					</Button>
					<CustomButton />
				</Grid>
				<Grid item>
					<CustomButton text="Rules" />
				</Grid>
				<Grid item>
					<CustomButton text="Settings" />
				</Grid>
				<Grid item>
					<CustomButton text="custom button" />
				</Grid>
			</Grid>
		</div>
	);
};

export default MainMenu;
