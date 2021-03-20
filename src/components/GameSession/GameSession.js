import React, { useState, useContext } from 'react';
import { playerBoardContext } from '../../context/playerBoard.context';
import { Grid, Typography } from '@material-ui/core';
import PlayerBoardCell from '../GridCell/GridCell';
import PlayerBoard from '../Board/Board';

const GameSession = () => {
	const { board } = useContext(playerBoardContext);
	console.log(board);
	return (
		<>
			<Grid container justify="space-evenly">
				<Grid item>
					<PlayerBoard
						boardData={board}
						render={(cell) => {
							return (
								<PlayerBoardCell
									clickFunction={() => {}}
									isBattleShip={cell.isBattleShip}
									coords={cell.coords}
									type={cell.type}
								/>
							);
						}}
					/>
				</Grid>
				<Grid item></Grid>
			</Grid>
		</>
	);
};

export default GameSession;
