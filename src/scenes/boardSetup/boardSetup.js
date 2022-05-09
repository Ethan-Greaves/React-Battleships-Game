import React, { Component } from 'react';
import { Typography, Box, Grid, Container } from '@material-ui/core';
import YourShips from '../../components/YourShips/YourShips';
import SetupBoard from '../../components/SetupBoard/SetupBoard';
import TitleCard from '../../components/TitleCard/TitleCard';
import ComputerBoard from '../../components/computerBoard/computerBoard';

const BoardSetup = () => {
	//TODO Put ship queue here, pass it down to both "yourships" and "setupboard" as props
	return (
		<Container>
			<TitleCard isHomePage={false} />
			<Typography variant="h4">Place Your Ships...</Typography>
			<Typography variant="caption">Press 'A/D/LeftArrow/RightArrow to place horizontal</Typography>
			<Box ml={3}></Box>
			<Typography variant="caption">Press 'W/S/UpArrow/DownArrow to place vertical</Typography>

			<Grid container justify="space-evenly" alignItems="center" spacing={0}>
				<Grid item>
					<YourShips />
				</Grid>
				<Grid item>
					<SetupBoard />
				</Grid>
				<Grid item>
					{/* <ComputerBoard /> */}
				</Grid>
			</Grid>
			{/* //TODO put this component in setupBoard file, make the ships arr part of state, shift array whenever ship is placed and dequeued */}
		</Container>
	);
};
export default BoardSetup;
