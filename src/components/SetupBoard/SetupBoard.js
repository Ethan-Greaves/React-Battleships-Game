import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import GridCell from '../GridCell/GridCell';
import useBoardCreator from '../../hooks/useBoardCreator';
import useShipPlacementDirection from '../../hooks/useShipPlacementDirection';
import useShipPlacementQueue from '../../hooks/useShipPlacementQueue';
import UseShipPlacer from '../../hooks/useShipPlacer';

const SetupBoard = ({ rows, cols }) => {
	//#region INITIALISATION
	const [board, setBoard, resetBoard] = useBoardCreator(rows, cols);
	const [placementDirection, changePlacementDirection] = useShipPlacementDirection('horizontal');
	const {
		placeCarrier,
		placeBattleship,
		placeCruiser,
		placeSubmarine,
		placeDestroyer,
		placeShipsRandomly,
	} = UseShipPlacer(board, rows, cols);
	const [shipPlacementQueue, setShipPlacementQueue, defaultShipPlacementQueue] = useShipPlacementQueue(
		placeCarrier,
		placeBattleship,
		placeCruiser,
		placeSubmarine,
		placeDestroyer
	);
	//#endregion

	const placeShip = (coords) => {
		//* Destructure our coordinates out of the object
		const { x, y } = coords;

		//* execute function and save return value
		const couldBePlaced = shipPlacementQueue.returnFirstInQueue()(x, y, placementDirection);

		if (couldBePlaced) {
			shipPlacementQueue.dequeue();
			setShipPlacementQueue(shipPlacementQueue);
			setBoard([...board]);
		} else {
			console.log(`Couldn't place ${placementDirection} at coordinate ${x},${y}`);
		}
	};

	const randomiseBoard = () => {
		handleResetBoard();
		placeShipsRandomly(defaultShipPlacementQueue, setShipPlacementQueue);
	};

	const handleResetBoard = () => {
		resetBoard();
		setShipPlacementQueue(defaultShipPlacementQueue);
	};

	return (
		<div onKeyDown={changePlacementDirection} tabIndex='0'>
			<button onClick={randomiseBoard}>Randomise</button>
			<button onClick={handleResetBoard}>Reset</button>

			{board.map((rows) => {
				return (
					<Grid container  justify='center'>
						{rows.map((cell) => {
							return (
								<Grid item>
									<GridCell
										placeBattleShip={placeShip}
										isBattleShip={cell.isBattleShip}
										coords={cell.coords}
										type={cell.type}
									/>
								</Grid>
							);
						})}
					</Grid>
				);
			})}
		</div>
	);
};

SetupBoard.defaultProps = {
	rows: 10,
	cols: 10,
};

export default SetupBoard;
