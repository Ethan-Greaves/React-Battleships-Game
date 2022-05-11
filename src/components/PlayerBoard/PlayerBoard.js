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

const PlayerBoard = ({ gameState, setPlayerTurnState, boardData, setLostState }) => {
	const [board, setBoard, resetBoard] = useBoardCreator(boardData.length, boardData.length);
	const { getRandomNonHitCell } = UseBoardScanner(boardData, boardData.length, boardData.length);
	const { registerHitTaken, isShipDestroyed, isAllShipsDestroyed } = UseUnit('Player', board);
	const { aiMakeMove } = UseComputerAI(board, setBoard);
	const styles = PlayerBoardStyles();

	/**UseEffect can ben seen almost as a start and update function, akin to Unity.
	 * The function runs on every re-render of a component, a component re-renders
	 * whenever states changes */
	useEffect(() => {
		setBoard(boardData);
		if (isAllShipsDestroyed()) setLostState();
		if (gameState !== 'enemyTurn') return;
		aiMakeMove(registerHitTaken, setPlayerTurnState);
	}, [setPlayerTurnState]);

	// const takeHit = () => {

	// 	setTimeout(() => {
	// 		const newBoard = board;
	// 		const { coords } = getRandomNonHitCell();
	// 		newBoard[coords.x][coords.y].isHit = true;
	// 		setBoard([...newBoard]);
	// 		registerHitTaken(coords.x, coords.y);
	// 		setPlayerTurnState();
	// 	}, parseInt(`${computerThinkingTime}000`));
	// };

	return (
		<div className={styles.boardOuterMargin}>
			<Typography variant="h4" align="center">
				You
			</Typography>
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
							isShipDestroyed={isShipDestroyed}
						/>
					);
				}}
			/>
		</div>
	);
};
export default PlayerBoard;
