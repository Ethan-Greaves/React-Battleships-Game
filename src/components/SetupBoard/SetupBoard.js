import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import GridCell from '../GridCell/GridCell';
import BoardEditor from '../../classes/BoardEditor';
import useBoardCreator from '../../hooks/useBoardCreator';
import useShipPlacementDirection from '../../hooks/useShipPlacementDirection';
import useShipPlacementQueue from '../../hooks/useShipPlacementQueue';
const SetupBoard = () => {
	//#region INITIALISATION
	const [board, setBoard, resetBoard] = useBoardCreator(10, 10);
	const boardEditor = new BoardEditor(board);
	const [placementDirection, changePlacementDirection] = useShipPlacementDirection('left');
	const [shipPlacementQueue, setShipPlacementQueue, defaultShipPlacementQueue] = useShipPlacementQueue(
		boardEditor
	);
	//#endregion

	const placeShip = (coords) => {
		//* Destructure our coordinates out of the object
		const { x, y } = coords;
		shipPlacementQueue.dequeue()(x, y, placementDirection);
		setShipPlacementQueue(shipPlacementQueue);
		setBoard([...boardEditor.getBoard()]);
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
