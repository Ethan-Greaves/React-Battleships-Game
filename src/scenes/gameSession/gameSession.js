import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ComputerBoard from '../../components/computerBoard/computerBoard';
import UseBattleSystem from '../../hooks/useBattleSystem';
import { useLocation } from 'react-router-dom';
import PlayerBoard from '../../components/PlayerBoard/PlayerBoard';
import gameSessionStyles from './gameSessionStyles';
import TitleCard from '../../components/TitleCard/TitleCard';
import GameStateInfo from '../../components/GameStateInfo/GameStateInfo';
import StatsInfo from '../../components/StatsInfo/StatsInfo';

const GameSession = () => {
	const [dialogueText, setDialogueText] = useState('Get Ready To Play!');
	const [playerTotalHits, setPlayerTotalHits] = useState(0);
	const [computerTotalHits, setComputerTotalHits] = useState(0);
	const [playerShipHits, setPlayerShipHits] = useState(0);
	const [computerShipHits, setComputerShipHits] = useState(0);
	const { gameState, setPlayerTurnState, setEnemyTurnState, setLostState, setWonState } =
		UseBattleSystem(setDialogueText);
	const location = useLocation();
	const fromUseShips = location.state;
	const styles = gameSessionStyles();

	useEffect(() => {
		setTimeout(() => {
			setPlayerTurnState();
		}, 2000);
	}, []);

	const recordHitPlayer = (isBattleship) => {
		setPlayerTotalHits(playerTotalHits + 1);
		if (isBattleship) setPlayerShipHits(playerShipHits + 1);
	};

	const recordHitComputer = (isBattleship) => {
		setComputerTotalHits(computerTotalHits + 1);
		if (isBattleship) setComputerShipHits(computerShipHits + 1);
	};

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
							recordHitComputer={recordHitComputer}
						/>
						<StatsInfo entity="Player" totalHits={playerTotalHits} shipHits={playerShipHits} />
					</Grid>
					<Grid item>
						<ComputerBoard
							gameState={gameState.state}
							setEnemyTurnState={setEnemyTurnState}
							setWonState={setWonState}
							recordHitPlayer={recordHitPlayer}
						/>
						<StatsInfo entity="Computer" totalHits={computerTotalHits} shipHits={computerShipHits} />
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};
export default GameSession;
