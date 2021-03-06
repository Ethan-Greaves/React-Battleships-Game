import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import GridCell from '../GridCell/GridCell';
import BoardCreator from '../../classes/BoardCreator';
import BoardEditor from '../../classes/BoardEditor';

const Board = ({ rows, columns }) => {
	//#region INITIALISATION
	const boardCreator = new BoardCreator(rows, columns);
	const [board, setBoard] = useState(boardCreator.createEmptyBoard());
	const [ShipsRemaining, setShipsRemaining] = useState(boardCreator.getShipsRemaining());
	const boardEditor = new BoardEditor(board, ShipsRemaining);
	const [placementDirection, setPlacementDirection] = useState('left');
	const defaultShipPlacementQueue = [
		(x, y, direction) => boardEditor.placeCarrier(x, y, direction),
		(x, y, direction) => boardEditor.placeBattleship(x, y, direction),
		(x, y, direction) => boardEditor.placeCruiser(x, y, direction),
		(x, y, direction) => boardEditor.placeSubmarine(x, y, direction),
		(x, y, direction) => boardEditor.placeDestroyer(x, y, direction),
	];
	const [shipPlacementQueue, setShipPlacementQueue] = useState(defaultShipPlacementQueue);

	//#endregion
	const changePlacementDirection = (e) => {
		if (e.key === 'w') setPlacementDirection('up');
		if (e.key === 's') setPlacementDirection('down');
		if (e.key === 'd') setPlacementDirection('right');
		if (e.key === 'a') setPlacementDirection('left');
	};

	const placeShip = (coords) => {
		if (shipPlacementQueue.length > 0) {
			//* Destructure our coordinates out of the object
			const { x, y } = coords;
			shipPlacementQueue[0](x, y, placementDirection);
			shipPlacementQueue.shift();
			setShipPlacementQueue(shipPlacementQueue);
			setBoard([...boardEditor.getBoard()]);
			setShipsRemaining(boardEditor.getShipsRemaining());
		}
	};

	const randomiseBoard = () => {
		setBoard([...boardCreator.createRandomBoard()]);
		setShipsRemaining(boardCreator.getShipsRemaining());
	};

	const resetBoard = () => {
		// setShipsRemaining(boardCreator.getShipsRemaining());
		setShipPlacementQueue(defaultShipPlacementQueue);

		setBoard([...boardCreator.createEmptyBoard()]);
	};

	return (
		<div onKeyDown={changePlacementDirection} tabIndex='0'>
			<p style={{ width: '100%' }}>{`Ships Remaining: ${ShipsRemaining}`}</p>
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

Board.defaultProps = {
	rows: 8,
	columns: 8,
};

export default Board;
