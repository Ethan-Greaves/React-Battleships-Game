import React, { useContext, useEffect, useState, useRef } from 'react';
import useBoardCreator from '../../hooks/useBoardCreator';
import { settingsContext } from '../../context/settings.context';
import UseShipPlacer from '../../hooks/useShipPlacer';
import useShipPlacementQueue from '../../hooks/useShipPlacementQueue';
import ComputerBoardSetup from '../Board/Board';
import GridCell from '../GridCell/GridCell';
import UseShipDestroyer from '../../hooks/useShipDestroyer';
import { Typography } from '@material-ui/core';
import UseUnit from '../../hooks/useUnit';

const ComputerBoard = ({ gameState, setEnemyTurnState, setWonState }) => {
	const { boardSize } = useContext(settingsContext);
	const [board, setBoard, resetBoard] = useBoardCreator(boardSize.rows, boardSize.cols);
	const { placeShip, placeShipsRandomly } = UseShipPlacer(board, boardSize.rows, boardSize.cols);
	const [shipPlacementQueue, setShipPlacementQueue, defaultShipPlacementQueue] = useShipPlacementQueue(placeShip);
	const [addHitToShip, checkToDestroy] = UseShipDestroyer(board);
	const { registerHitTaken, isShipDestroyed, isAllShipsDestroyed } = UseUnit('Computer', board);
	const isInitialMount = useRef(true);

	useEffect(() => {
		if (isInitialMount.current) {
			randomiseBoard();
			isInitialMount.current = false;
		} else {
			if (isAllShipsDestroyed()) setWonState();
		}
	}, [isAllShipsDestroyed, setWonState]);

	const randomiseBoard = () => {
		handleResetBoard();
		placeShipsRandomly(defaultShipPlacementQueue, setShipPlacementQueue);
	};

	const handleResetBoard = () => {
		resetBoard();
		setShipPlacementQueue(defaultShipPlacementQueue);
	};

	const handleClick = (coords, isBattleShip, type) => {
		if (gameState !== 'playerTurn' || board[coords.x][coords.y].isHit === true) return;

		const { x, y } = coords;
		const newBoard = [...board];
		newBoard[x][y].isHit = true;
		setBoard(newBoard);
		addHitToShip(type);
		registerHitTaken(x, y);
		
		setEnemyTurnState();
	};

	return (
		<div>
			<Typography variant="h4" align="center">
				Computer
			</Typography>
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
							isShipDestroyed={() => {
								return;
							}}
						/>
					);
				}}
			/>
		</div>
	);
};
export default ComputerBoard;
