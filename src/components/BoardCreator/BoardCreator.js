import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import GridCell from '../GridCell/GridCell';

const BoardCreator = ({ rows, columns }) => {
	const [GameGrid, setGameGrid] = useState(() => {
		const gridArr = [];
		for (let x = 0; x < rows; x++) {
			const rowArr = [];
			for (let y = 0; y < columns; y++) {
				rowArr.push({ coord: { x, y }, isBattleShip: false });
			}
			gridArr.push(rowArr);
		}

		return gridArr;
	});

	const placeBattleShip = (coord) => {
		const newGameGrid = GameGrid;
		//* Destructure our coordinates out of the object
		const { y, x } = coord;
		//* Set the cell that was clicked to be either empty or ship
		newGameGrid[x][y].isBattleShip = !newGameGrid[x][y].isBattleShip;
		//* Set the old grid to be new grid and cause re-render
		setGameGrid([...newGameGrid]);
	};

	return (
		<>
			{GameGrid.map((rows) => {
				return (
					<Grid container spacing={1} align='center' justify='center'>
						{rows.map((cell) => {
							return (
								<Grid item>
									<GridCell
										placeBattleShip={placeBattleShip}
										isBattleShip={cell.isBattleShip}
										coord={cell.coord}
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

BoardCreator.defaultProps = {
	rows: 12,
	columns: 12,
};

export default BoardCreator;
