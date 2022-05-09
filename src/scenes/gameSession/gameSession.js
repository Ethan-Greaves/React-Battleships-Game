import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ComputerBoard from '../../components/computerBoard/computerBoard';
import UseBattleSystem from '../../hooks/useBattleSystem';

const GameSession = () => {
	const [dialogueText, setDialogueText] = useState('Get Ready To Play!');
	const {gameState, setPlayerTurnState, setEnemyTurnState} = UseBattleSystem(setDialogueText);

	useEffect(() => {
		setTimeout(() => {
			setPlayerTurnState();
		}, 5000);
	}, []);

	return (
		<div>
			<h1>{dialogueText}</h1>
			<Grid container>
				<Grid item>
					
				</Grid>
				<Grid item>
					<ComputerBoard gameState={gameState.state} setEnemyTurnState={setEnemyTurnState} />
				</Grid>
			</Grid>
		</div>
	);
};
export default GameSession;
