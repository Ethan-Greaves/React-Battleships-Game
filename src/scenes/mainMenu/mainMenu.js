import { Typography, Grid, Button, Box } from '@material-ui/core';
import React, { useEffect, useState, useContext } from 'react';
import MainMenuStyles from './mainMenuStyles';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import TitleCard from '../../components/TitleCard/TitleCard';
import { UseQuitGame } from '../../hooks/useQuitGame';
import { settingsContext } from '../../context/settings.context';

const MainMenu = () => {
	const styles = MainMenuStyles();
	const { quit } = UseQuitGame();
	const { boardSizeVal, setBoardSizeVal } = useContext(settingsContext);
	const { aiDifficulty, setAiDifficulty } = useContext(settingsContext);
	const { totalShips, setTotalShips } = useContext(settingsContext);
	const { disableAnimations, setDisableAnimations } = useContext(settingsContext);

	useEffect(() => {
		if (!aiDifficulty) setAiDifficulty(0);
		if (!boardSizeVal) setBoardSizeVal(0);
		if (!totalShips && totalShips !== 0) setTotalShips(4);
		if (!disableAnimations) setDisableAnimations(false);
	}, [aiDifficulty, boardSizeVal, setAiDifficulty, setBoardSizeVal, setTotalShips, totalShips]);

	return (
		<div className={styles.background}>
			<Grid
				container
				spacing={2}
				direction='column'
				alignItems='center'
				justifyContent='center'
				justify='center'
				style={{ minHeight: '100vh' }}
			>
				<TitleCard isHomePage={true} />
				<Grid item>
					<Link to='/setupBoard'>
						<CustomButton text='Play' />
					</Link>
				</Grid>
				<Grid item>
					<Link to='/rules'>
						<CustomButton text='Rules' />
					</Link>
				</Grid>
				<Grid item>
					<Link to='/settings'>
						<CustomButton text='Settings' />
					</Link>
				</Grid>
				<Grid item>
					<CustomButton text='Quit' onClick={quit} />
				</Grid>
			</Grid>
		</div>
	);
};

export default MainMenu;
