import React, { Component } from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import YourShips from '../../components/YourShips/YourShips';
import SetupBoard from '../../components/SetupBoard/SetupBoard';

const BoardSetup = () => {
	//TODO Put ship queue here, pass it down to both "yourships" and "setupboard" as props
	return (
		<div>
			<Typography variant="h4">Place Your Ships...</Typography>
			<Typography variant="caption">
				Press 'A/D/LeftArrow/RightArrow to place horizontal
			</Typography>
			<Box ml={3}></Box>
			<Typography variant="caption">
				Press 'W/S/UpArrow/DownArrow to place vertical
			</Typography>

			<Grid container>
				<Grid item>
					<YourShips
						ships={[
							{ name: 'Carrier', size: 5, isBeingPlaced: true },
							{ name: 'Battleship', size: 4, isBeingPlaced: false },
							{ name: 'Cruiser', size: 3, isBeingPlaced: false },
							{ name: 'Submarine', size: 3, isBeingPlaced: false },
							{ name: 'Destroyer', size: 2, isBeingPlaced: false },
						]}
					/>
				</Grid>
				<Grid item>
					<SetupBoard />
				</Grid>
			</Grid>
			{/* //TODO put this component in setupBoard file, make the ships arr part of state, shift array whenever ship is placed and dequeued */}
		</div>
	);
};
export default BoardSetup;
