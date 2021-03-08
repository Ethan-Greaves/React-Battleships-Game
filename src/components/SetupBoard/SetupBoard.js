import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import GridCell from '../GridCell/GridCell';
import BoardEditor from '../../classes/BoardEditor';
import useBoardCreator from '../../hooks/useBoardCreator';
import useShipPlacementDirection from '../../hooks/useShipPlacementDirection';
import useShipPlacementQueue from '../../hooks/useShipPlacementQueue';
import useShipPlacer from '../../hooks/useShipPlacer';
import UseShipPlacer from '../../hooks/useShipPlacer';

const SetupBoard = () => {
	//#region INITIALISATION
	const [board, setBoard, resetBoard] = useBoardCreator(10, 10);
	const boardEditor = new BoardEditor(board);
	const [placementDirection, changePlacementDirection] = useShipPlacementDirection('left');
	const {
		placeCarrier,
		placeBattleship,
		placeCruiser,
		placeSubmarine,
		placeDestroyer,
		modifiedBoard,
	} = UseShipPlacer(board);
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
		const couldBePlaced = shipPlacementQueue.returnFirstInQueue()(x, y, placementDirection);

		if (couldBePlaced) {
			shipPlacementQueue.dequeue();
			setShipPlacementQueue(shipPlacementQueue);
			setBoard([...modifiedBoard]);
		}
	};

	const randomiseBoard = () => {
		// setBoard([...boardCreator.createRandomBoard()]);
	};

	const handleResetBoard = () => {
		setShipPlacementQueue(defaultShipPlacementQueue);
		resetBoard();
	};

	return (
		<div onKeyDown={changePlacementDirection} tabIndex='0'>
			<button onClick={randomiseBoard}>Randomise</button>
			<button onClick={handleResetBoard}>Reset</button>

			{board.map((rows) => {
				return (
					<Grid container spacing={1} align='center' justify='center'>
						{rows.map((cell) => {
							return (
								<Grid item>
									<GridCell
										placeBattleShip={placeShip}
										isBattleShip={cell.isBattleShip}
										coords={cell.coords}
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

export default SetupBoard;
