import React, { useContext, useEffect, useState } from 'react';
import useBoardCreator from '../../hooks/useBoardCreator';
import { settingsContext } from '../../context/settings.context';
import UseShipPlacer from '../../hooks/useShipPlacer';
import useShipPlacementQueue from '../../hooks/useShipPlacementQueue';
import ComputerBoardSetup from '../Board/Board';
import GridCell from '../GridCell/GridCell';
import UseShipDestroyer from '../../hooks/useShipDestroyer';

const ComputerBoard = ({ gameState, setEnemyTurnState }) => {
	const { boardSize } = useContext(settingsContext);
	const [board, setBoard, resetBoard] = useBoardCreator(boardSize.rows, boardSize.cols);
	const { placeShip, placeShipsRandomly } = UseShipPlacer(board, boardSize.rows, boardSize.cols);
	const [shipPlacementQueue, setShipPlacementQueue, defaultShipPlacementQueue] = useShipPlacementQueue(placeShip);
	const [addHitToShip, checkToDestroy] = UseShipDestroyer(board);
	console.log(setEnemyTurnState);
	// setEnemyTurnState();

	useEffect(() => {
		randomiseBoard();
	}, []);

	const randomiseBoard = () => {
		handleResetBoard();
		placeShipsRandomly(defaultShipPlacementQueue, setShipPlacementQueue);
	};

	const handleResetBoard = () => {
		resetBoard();
		setShipPlacementQueue(defaultShipPlacementQueue);
	};

	const handleClick = (coords, isBattleShip, type) => {
		if (gameState !== 'playerTurn') return;
		const { x, y } = coords;
		const newBoard = [...board];
		newBoard[x][y].isHit = true;
		setBoard(newBoard);
		addHitToShip(type);
		console.log(type);
		setEnemyTurnState();
	};

	return (
		<div>
			<ComputerBoardSetup
				boardData={board}
				render={(cell) => {
					return (
						<GridCell
							clickFunction={handleClick}
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
							computerBoardCell={true}
							type={cell.type}
						/>
					);
				}}
			/>
		</div>
	);
};
export default ComputerBoard;
