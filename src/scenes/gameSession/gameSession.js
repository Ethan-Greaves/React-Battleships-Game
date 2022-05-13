import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ComputerBoard from '../../components/computerBoard/computerBoard';
import UseBattleSystem from '../../hooks/useBattleSystem';
import { useLocation } from 'react-router-dom';
import PlayerBoard from '../../components/PlayerBoard/PlayerBoard';
import gameSessionStyles from './gameSessionStyles';
import TitleCard from '../../components/TitleCard/TitleCard';
import GameStateInfo from '../../components/GameStateInfo/GameStateInfo';

const GameSession = () => {
	const [dialogueText, setDialogueText] = useState('Get Ready To Play!');
	const { gameState, setPlayerTurnState, setEnemyTurnState, setLostState, setWonState } =
		UseBattleSystem(setDialogueText);
	const location = useLocation();
	const fromUseShips = location.state;
	const styles = gameSessionStyles();

	useEffect(() => {
		setTimeout(() => {
			// setPlayerTurnState();
			setWonState();
		}, 2000);
	}, []);

	return (
		<div className={styles.div}>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				justify="center"
				style={{ minHeight: '90vh' }}>
				<Grid item>
					<TitleCard isHomePage={false} />
					<GameStateInfo stateDialogue={dialogueText} gameState={gameState.state} />
				</Grid>

				<Grid container spacing={3} direction="row" alignItems="center" justifyContent="center" justify="center">
					{/* <Grid item alignContent="flex-start" justify="flex-start" spacing={5}>
						<Typography variant="h6">Stats</Typography>
					</Grid> */}
					<Grid item>
						<PlayerBoard
							gameState={gameState.state}
							setPlayerTurnState={setPlayerTurnState}
							boardData={fromUseShips.board}
							setLostState={setLostState}
						/>
					</Grid>
					<Grid item>
						<ComputerBoard
							gameState={gameState.state}
							setEnemyTurnState={setEnemyTurnState}
							setWonState={setWonState}
						/>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};
export default GameSession;
