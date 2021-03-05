import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import GridCell from '../GridCell/GridCell';
import BoardCreator from '../../classes/BoardCreator';
import BoardEditor from '../../classes/BoardEditor';

const Board = ({ rows, columns, totalShipAllowance }) => {
	//#region INITIALISATION
	const boardCreator = new BoardCreator(rows, columns);
	const [board, setBoard] = useState(boardCreator.createEmptyBoard());
	const [ShipsRemaining, setShipsRemaining] = useState(boardCreator.getShipsRemaining());
	const boardEditor = new BoardEditor(board, ShipsRemaining, totalShipAllowance);
	//#endregion

	const changeBattleshipCell = (coords) => {
		//* Destructure our coordinates out of the object
		const { y, x } = coords;

		boardEditor.changeBattleshipCell(x, y);

		setBoard([...boardEditor.getBoard()]);
		setShipsRemaining(boardEditor.getShipsRemaining());
	};

	const randomiseBoard = () => {
		setBoard([...boardCreator.createRandomBoard()]);
		setShipsRemaining(boardCreator.getShipsRemaining());
	};

	return (
		<>
			<p style={{ width: '100%' }}>{`Ships Remaining: ${ShipsRemaining}`}</p>
			<button onClick={randomiseBoard}>Randomize</button>
			{board.map((rows) => {
				return (
					<Grid container spacing={1} align='center' justify='center'>
						{rows.map((cell) => {
							return (
								<Grid item>
									<GridCell
										placeBattleShip={changeBattleshipCell}
										isBattleShip={cell.isBattleShip}
										coords={cell.coords}
									/>
								</Grid>
							);
						})}
					</Grid>
				);
			})}
		</>
	);
};

Board.defaultProps = {
	rows: 12,
	columns: 12,
	totalShipAllowance: 10,
};

export default Board;
