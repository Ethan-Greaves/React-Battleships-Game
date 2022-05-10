import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ComputerBoard from '../../components/computerBoard/computerBoard';
import UseBattleSystem from '../../hooks/useBattleSystem';
import { useLocation } from 'react-router-dom';
import PlayerBoard from '../../components/PlayerBoard/PlayerBoard';

const GameSession = () => {
	const [dialogueText, setDialogueText] = useState('Get Ready To Play!');
	const { gameState, setPlayerTurnState, setEnemyTurnState, setLostState, setWonState } =
		UseBattleSystem(setDialogueText);
	const location = useLocation();
	const fromUseShips = location.state;
	useEffect(() => {
		setTimeout(() => {
			setPlayerTurnState();
		}, 5000);
	}, []);

	return (
		<div>
			<Typography variant="h3">{dialogueText}</Typography>
			<Grid container>
				<Grid item>
					<PlayerBoard
						gameState={gameState.state}
						setPlayerTurnState={setPlayerTurnState}
						boardData={fromUseShips.board}
						setLostState={setLostState}
					/>
				</Grid>
				<Grid item>
					<ComputerBoard gameState={gameState.state} setEnemyTurnState={setEnemyTurnState} setWonState={setWonState} />
				</Grid>
			</Grid>
		</div>
	);
};
export default GameSession;
