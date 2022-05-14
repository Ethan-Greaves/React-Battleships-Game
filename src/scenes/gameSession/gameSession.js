import { Box, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ComputerBoard from '../../components/computerBoard/computerBoard';
import UseBattleSystem from '../../hooks/useBattleSystem';
import { useLocation } from 'react-router-dom';
import PlayerBoard from '../../components/PlayerBoard/PlayerBoard';
import gameSessionStyles from './gameSessionStyles';
import TitleCard from '../../components/TitleCard/TitleCard';
import GameStateInfo from '../../components/GameStateInfo/GameStateInfo';
import StatsInfo from '../../components/StatsInfo/StatsInfo';
import UseCollectStats from '../../hooks/useCollectStats';

const GameSession = () => {
	const [dialogueText, setDialogueText] = useState('Get Ready To Play!');
	const { gameState, setPlayerTurnState, setEnemyTurnState, setLostState, setWonState } =
		UseBattleSystem(setDialogueText);
	const location = useLocation();
	const fromUseShips = location.state;
	const styles = gameSessionStyles();
	const { totalHits, shipHits, addTotalHit, addShipHit } = UseCollectStats();

	useEffect(() => {
		setTimeout(() => {
			setPlayerTurnState();
		}, 2000);
	}, []);

	return (
		<Container maxWidth="md">
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

					<Grid container spacing={2} direction="row" alignItems="center" justifyContent="center" justify="center">
						<Grid item></Grid>
						<Grid item>
							<Typography
								variant="h5"
								gutterBottom
								align="center"
								style={{ color: 'black', backgroundColor: 'orange', borderRadius: '5px' }}>
								You
							</Typography>
							<PlayerBoard
								gameState={gameState.state}
								setPlayerTurnState={setPlayerTurnState}
								boardData={fromUseShips.board}
								setLostState={setLostState}
							/>
						</Grid>
						<Grid item>
							<Typography
								variant="h5"
								gutterBottom
								align="center"
								style={{ color: 'black', backgroundColor: 'orange', borderRadius: '5px' }}>
								<Box>{`Computer`.toUpperCase()}</Box>
							</Typography>
							<ComputerBoard
								gameState={gameState.state}
								setEnemyTurnState={setEnemyTurnState}
								setWonState={setWonState}
								addShipHitPlayer={addShipHit}
								addTotalHitPlayer={addTotalHit}
							/>
						</Grid>
					</Grid>
					{/* <Grid container alignItems="center" justifyContent="center" justify="center" style={{ marginTop: '2em' }}>
						<StatsInfo totalHits={totalHits} shipHits={shipHits} />
					</Grid> */}
				</Grid>
			</div>
		</Container>
	);
};
export default GameSession;
