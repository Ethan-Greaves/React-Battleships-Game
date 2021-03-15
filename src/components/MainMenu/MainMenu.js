import { Typography, Grid, Button, Box } from '@material-ui/core';
import React, { useState } from 'react';
import MainMenuStyles from './MainMenusStyles';
import { Link } from 'react-router-dom';

const MainMenu = () => {
	const styles = MainMenuStyles();
	return (
		<div className={styles.root}>
			<Typography variant="h3" align="center">
				BATTLESHIPS
			</Typography>
			<Box mt={2} />
			<Grid container spacing={2} justify="center">
				<Grid item>
					<Link to="/setupBoard">
						<Button
							color="primary"
							variant="contained"
							onClick={/*tell the game manager that the game mode is singleplayer */}>
							Singleplayer
						</Button>
					</Link>
				</Grid>
				<Grid item>
					<Button color="primary" variant="contained">
						Multiplayer
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default MainMenu;
