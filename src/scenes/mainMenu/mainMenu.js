import { Typography, Grid, Button, Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import MainMenuStyles from './mainMenuStyles';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import TitleCard from '../../components/TitleCard/TitleCard';
import { UseQuitGame } from '../../hooks/useQuitGame';
const MainMenu = () => {
	// const [playing, toggle] = useAudio(musicFile, true);
	const styles = MainMenuStyles();
	const { quit } = UseQuitGame();

	useEffect(() => {
		// toggle();
	}, []);

	const setGameMode = () => {};

	const closeTab = () => {
		window.open('', '_self').close();
	};

	return (
		<div className={styles.background}>
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
						<CustomButton text="Play" />
					</Link>
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
					<CustomButton text="Quit" onClick={quit} />
				</Grid>
			</Grid>
		</div>
	);
};

export default MainMenu;
