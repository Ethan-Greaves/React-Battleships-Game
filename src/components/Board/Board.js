import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import GridCell from '../GridCell/GridCell';
import BoardEditor from '../../classes/BoardEditor';
import useBoardCreator from '../../hooks/useBoardCreator';
import useShipPlacementDirection from '../../hooks/useShipPlacementDirection';

const Board = () => {
	//#region INITIALISATION
	const [board, setBoard, createEmptyBoard] = useBoardCreator(10, 10);
	const boardEditor = new BoardEditor(board);
	const [placementDirection, changePlacementDirection] = useShipPlacementDirection('left');
	const defaultShipPlacementQueue = [
		(x, y, direction) => boardEditor.placeCarrier(x, y, direction),
		(x, y, direction) => boardEditor.placeBattleship(x, y, direction),
		(x, y, direction) => boardEditor.placeCruiser(x, y, direction),
		(x, y, direction) => boardEditor.placeSubmarine(x, y, direction),
		(x, y, direction) => boardEditor.placeDestroyer(x, y, direction),
	];
	const [shipPlacementQueue, setShipPlacementQueue] = useState(defaultShipPlacementQueue);

	//#endregion

	const placeShip = (coords) => {
		if (shipPlacementQueue.length > 0) {
			//* Destructure our coordinates out of the object
			const { x, y } = coords;
			shipPlacementQueue[0](x, y, placementDirection);
			shipPlacementQueue.shift();
			setShipPlacementQueue(shipPlacementQueue);
			setBoard([...boardEditor.getBoard()]);
		}
	};

	const randomiseBoard = () => {
		// setBoard([...boardCreator.createRandomBoard()]);
	};

	const resetBoard = () => {
		// setShipsRemaining(boardCreator.getShipsRemaining());
		setShipPlacementQueue(defaultShipPlacementQueue);

		setBoard([...createEmptyBoard()]);
	};

	return (
		<div onKeyDown={changePlacementDirection} tabIndex='0'>
			<button onClick={randomiseBoard}>Randomise</button>
			<button onClick={resetBoard}>Reset</button>

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

export default Board;
