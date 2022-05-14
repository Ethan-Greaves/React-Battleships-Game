import React, { useContext, useState, useEffect } from 'react';
import { settingsContext } from '../../context/settings.context';
import useBoardCreator from '../../hooks/useBoardCreator';
import GridCell from '../GridCell/GridCell';
import PlayerBoardSetup from '../Board/Board';
import UseBoardScanner from '../../hooks/useBoardScanner';
import UseUnit from '../../hooks/useUnit';
import PlayerBoardStyles from './PlayerBoardStyles';
import { Typography } from '@material-ui/core';
import UseComputerAI from '../../hooks/useComputerAI';
import StatsInfo from '../StatsInfo/StatsInfo';

const PlayerBoard = ({ gameState, setPlayerTurnState, boardData, setLostState }) => {
	const [board, setBoard, resetBoard] = useBoardCreator(boardData.length, boardData.length);
	const { getRandomNonHitCell } = UseBoardScanner(boardData, boardData.length, boardData.length);
	const { registerHitTaken, isShipDestroyed, isAllShipsDestroyed } = UseUnit('Player', board, setBoard);
	const { aiMakeMove } = UseComputerAI(
		board,
		setBoard,
		registerHitTaken,
		setPlayerTurnState,
		isShipDestroyed
		// addShipHitCpu,
		// addTotalHitCpu
	);
	const styles = PlayerBoardStyles();

	/**UseEffect can ben seen almost as a start and update function, akin to Unity.
	 * The function runs on every re-render of a component, a component re-renders
	 * whenever states changes */
	useEffect(() => {
		setBoard(boardData);
		if (isAllShipsDestroyed()) setLostState();
		if (gameState !== 'enemyTurn') return;
		aiMakeMove();
	}, [setPlayerTurnState]);

	return (
		<div className={`${styles.boardOuterMargin} ${styles.board}`}>
			<PlayerBoardSetup
				boardData={board}
				render={(cell) => {
					return (
						<GridCell
							clickFunction={() => {
								return;
							}}
							hoverFunction={() => {
								return;
							}}
							hoverExitFunction={() => {
								return;
							}}
							isBattleShip={cell.isBattleShip}
							isPreviewing={cell.isPreviewing}
							isUnplaceable={cell.isUnplaceable}
							isHit={cell.isHit}
							coords={cell.coords}
							computerBoardCell={false}
							type={cell.type}
							isDestroyed={cell.isDestroyed}
						/>
					);
				}}
			/>
		</div>
	);
};
export default PlayerBoard;
