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
			<Typography variant="h4" align="center">
				Place Your Ships...
			</Typography>

			<Grid container alignItems="center" justify="center" justifyContent="center" spacing={2}>
				<Grid item>
					<YourShips />
				</Grid>
				<Grid item>
					<SetupBoard />
				</Grid>
				<Grid item>{/* <ComputerBoard /> */}</Grid>
			</Grid>
			{/* //TODO put this component in setupBoard file, make the ships arr part of state, shift array whenever ship is placed and dequeued */}
		</Container>
	);
};
export default BoardSetup;
