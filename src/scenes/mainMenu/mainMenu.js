import { Typography, Grid, Button, Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import MainMenuStyles from './mainMenuStyles';
import { Link } from 'react-router-dom';
import musicFile from '.././../assets/music/468542__ddmyzik__civil-war-field-loop.wav';
import useAudio from '../../hooks/useAudio';
import YourShip from '../../components/YourShip/YourShip';
import YourShips from '../../components/YourShips/YourShips';
import CustomButton from '../../components/CustomButton/CustomButton';
import TitleCard from '../../components/TitleCard/TitleCard';

const MainMenu = () => {
	// const [playing, toggle] = useAudio(musicFile, true);
	const styles = MainMenuStyles();
	const [multiplayerButtonText, setMPButtonText] = useState('Multiplayer');

	useEffect(() => {
		// toggle();
	}, []);

	const setGameMode = () => {};

	const closeTab = () => {
		window.open('', '_self').close();
	};

	return (
		<div className={styles.background}>
			{/* <Button onClick={startMusic}>Play Music</Button> */}

			<Grid
				container
				spacing={2}
				direction="column"
				alignItems="center"
				justifyContent="center"
				justify="center"
				style={{ minHeight: '100vh' }}>
				<TitleCard isHomePage={true} />
				<Grid item>
					<Link to="/setupBoard">
						<CustomButton text="Singleplayer" />
					</Link>
				</Grid>
				<Grid item>
					{/* <Button
						color="primary"
						variant="contained"
						onMouseOver={() => setMPButtonText('Coming Soon!')}
						onMouseLeave={() => setMPButtonText('Multiplayer')}>
						{multiplayerButtonText}
					</Button> */}
					<CustomButton text="Multiplayer" />
				</Grid>
				<Grid item>
					<Link to="/rules">
						<CustomButton text="Rules" />
					</Link>
				</Grid>
				<Grid item>
					<Link to="/settings">
						<CustomButton text="Settings" />
					</Link>
				</Grid>
				<Grid item>
					<CustomButton text="Quit" />
				</Grid>
			</Grid>
		</div>
	);
};

export default MainMenu;
