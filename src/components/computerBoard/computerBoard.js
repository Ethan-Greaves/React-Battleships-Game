import React, { useContext, useEffect, useState, useRef, useCallback } from 'react';
import useBoardCreator from '../../hooks/useBoardCreator';
import { settingsContext } from '../../context/settings.context';
import UseShipPlacer from '../../hooks/useShipPlacer';
import useShipPlacementQueue from '../../hooks/useShipPlacementQueue';
import ComputerBoardSetup from '../Board/Board';
import GridCell from '../GridCell/GridCell';
import UseShipDestroyer from '../../hooks/useShipDestroyer';
import { Typography } from '@material-ui/core';
import UseUnit from '../../hooks/useUnit';
import generalStyles from '../../generalCSS/generalStyle';
import computerBoardStyles from './computerBoardStyles';

const ComputerBoard = ({ gameState, setEnemyTurnState, setWonState, addShipHitPlayer, addTotalHitPlayer }) => {
	const { boardSize } = useContext(settingsContext);
	const [board, setBoard, resetBoard] = useBoardCreator(boardSize.rows, boardSize.cols);
	const { placeShip, placeShipsRandomly } = UseShipPlacer(board, boardSize.rows, boardSize.cols);
	const [shipPlacementQueue, setShipPlacementQueue, defaultShipPlacementQueue] = useShipPlacementQueue(placeShip);
	const [addHitToShip, checkToDestroy] = UseShipDestroyer(board);
	const { registerHitTaken, isShipDestroyed, isAllShipsDestroyed } = UseUnit('Computer', board, setBoard);
	const isInitialMount = useRef(true);
	const styles = computerBoardStyles();
	const generalStyle = generalStyles();

	const handleResetBoard = useCallback(() => {
		resetBoard();
		setShipPlacementQueue(defaultShipPlacementQueue);
	}, [defaultShipPlacementQueue, resetBoard, setShipPlacementQueue]);

	const randomiseBoard = useCallback(() => {
		handleResetBoard();
		placeShipsRandomly(defaultShipPlacementQueue, setShipPlacementQueue);
	}, [defaultShipPlacementQueue, handleResetBoard, placeShipsRandomly, setShipPlacementQueue]);

	const handleClick = (coords, isBattleShip, type) => {
		if (gameState !== 'playerTurn' || board[coords.x][coords.y].isHit === true) return;
		const { x, y } = coords;
		const newBoard = [...board];
		newBoard[x][y].isHit = true;
		addTotalHitPlayer();

		if (newBoard[x][y].isBattleShip) addShipHitPlayer();
		setBoard(newBoard);
		addHitToShip(type);
		registerHitTaken(x, y);
		isShipDestroyed(x, y);
		setEnemyTurnState();
	};

	useEffect(() => {
		if (isInitialMount.current) {
			randomiseBoard();
			isInitialMount.current = false;
		} else {
			if (isAllShipsDestroyed()) setWonState();
		}
	}, [isAllShipsDestroyed, randomiseBoard, setWonState]);

	return (
		<div className={`${styles.board} ${generalStyle.boardBackground}`}>
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
							isDestroyed={cell.isDestroyed}
							placementDirection={cell.direction}
							isShipTop={cell.isShipTop}
							isShipMiddle={cell.isShipMiddle}
							isShipBottom={cell.isShipBottom}
						/>
					);
				}}
			/>
		</div>
	);
};
export default ComputerBoard;
