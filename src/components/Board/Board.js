import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import GridCell from '../GridCell/GridCell';

const Board = ({ rows, columns }) => {
	const createGrid = () => {
		const gridArr = [];
		for (let x = 0; x < rows; x++) {
			const rowArr = [];
			for (let y = 0; y < columns; y++) {
				rowArr.push({ coord: { x, y }, isBattleShip: false });
			}
			gridArr.push(rowArr);
		}

		return gridArr;
	};
	const [GameGrid, setGameGrid] = useState(createGrid());

	return (
		<div>
			{GameGrid.map((rows) => {
				return (
					<Grid container spacing={1} align='center' justify='center'>
						{rows.map((cell) => {
							return (
								<Grid item>
									<GridCell isBattleShip={cell.isBattleShip} />
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
	rows: 12,
	columns: 12,
};

export default Board;
