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
	const [totalHits, shipHits, addTotalHit, addShipHit] = UseCollectStats();
	const [totalHitsCpu, shipHitsCpu, addTotalHitCpu, addShipHitCpu] = UseCollectStats();

	useEffect(() => {
		setTimeout(() => {
			setPlayerTurnState();
		}, 2000);
	}, []);
	console.clear();
	console.log(`Ship hits: ${shipHitsCpu}`);
	console.log(`total hits: ${totalHitsCpu}`);
	console.log(`accuracy: ${(Math.round((shipHits / totalHits) * 100) || 0)}`);

	return (
		<Container maxWidth='lg'>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				justify='center'
				style={{ minHeight: '90vh' }}
			>
				<Grid item>
					<TitleCard isHomePage={false} />
					<GameStateInfo stateDialogue={dialogueText} gameState={gameState.current.state} />
				</Grid>

				<Grid container spacing={2} direction='row' alignItems='center' justifyContent='center' justify='center'>
					<Grid item>
						<StatsInfo name='Your' totalHits={totalHits} shipHits={shipHits} />
					</Grid>
					<Grid item>
						<Typography variant='h5' gutterBottom align='center' className={styles.boardLabel}>
							You
						</Typography>
						<PlayerBoard
							gameState={gameState.current.state}
							setPlayerTurnState={setPlayerTurnState}
							boardData={fromUseShips.board}
							setLostState={setLostState}
							addShipHitCpu={addShipHitCpu}
							addTotalHitCpu={addTotalHitCpu}
						/>
					</Grid>
					<Grid item>
						<Typography variant='h5' gutterBottom align='center' className={styles.boardLabel}>
							<Box>{`Computer`.toUpperCase()}</Box>
						</Typography>
						<ComputerBoard
							gameState={gameState.current.state}
							setEnemyTurnState={setEnemyTurnState}
							setWonState={setWonState}
							addShipHitPlayer={addShipHit}
							addTotalHitPlayer={addTotalHit}
						/>
					</Grid>
					<Grid item>
						<StatsInfo name='Computer' totalHits={totalHitsCpu} shipHits={shipHitsCpu} />
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default GameSession;
