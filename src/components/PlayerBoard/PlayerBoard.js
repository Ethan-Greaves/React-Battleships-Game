import React, { useContext, useState, useEffect } from 'react';
import { settingsContext } from '../../context/settings.context';
import useBoardCreator from '../../hooks/useBoardCreator';
import GridCell from '../GridCell/GridCell';
import PlayerBoardSetup from '../Board/Board';
import UseBoardScanner from '../../hooks/useBoardScanner';
import UseUnit from '../../hooks/useUnit';
import PlayerBoardStyles from './PlayerBoardStyles';
import { Typography } from '@material-ui/core';

const PlayerBoard = ({ gameState, setPlayerTurnState, boardData }) => {
	const [board, setBoard, resetBoard] = useBoardCreator(boardData.length, boardData.length);
	const { getRandomNonHitCell } = UseBoardScanner(boardData, boardData.length, boardData.length);
	const { registerHitTaken, isShipDestroyed } = UseUnit('Player', board);
	const styles = PlayerBoardStyles();

	/**UseEffect can ben seen almost as a start and update function, akin to Unity.
	 * The function runs on every re-render of a component, a component re-renders
	 * whenever states changes */
	useEffect(() => {
		setBoard(boardData);
		takeHit();
	}, [setPlayerTurnState]);

	const takeHit = () => {
		if (gameState !== 'enemyTurn') return;
		const computerThinkingTime = Math.floor(Math.random() * 5) + 1;

		setTimeout(() => {
			const newBoard = board;
			const { coords } = getRandomNonHitCell();
			newBoard[coords.x][coords.y].isHit = true;
			setBoard([...newBoard]);
			registerHitTaken(coords.x, coords.y);
			// console.log(`Player Board: is Destroyer destroyed? ${isShipDestroyed('destroyer')}`);
			setPlayerTurnState();
		}, parseInt(`500`));
	};

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
