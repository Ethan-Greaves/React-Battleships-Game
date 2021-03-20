import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import GridCell from '../../components/GridCell/GridCell';

const BoardDisplayer = (board) => {
	board.map((rows) => {
		return (
			<Grid container justify="center">
				{rows.map((cell) => {
					return (
						<Grid item>
							<GridCell
								// placeBattleShip={handlePlaceShip}
								isBattleShip={cell.isBattleShip}
								coords={cell.coords}
								type={cell.type}
							/>
						</Grid>
					);
				})}
			</Grid>
		);
	});
};

export default BoardDisplayer;
