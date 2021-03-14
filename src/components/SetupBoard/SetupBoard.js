import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import GridCell from '../GridCell/GridCell';
import useBoardCreator from '../../hooks/useBoardCreator';
import useShipPlacementDirection from '../../hooks/useShipPlacementDirection';
import useShipPlacementQueue from '../../hooks/useShipPlacementQueue';
import UseShipPlacer from '../../hooks/useShipPlacer';

const SetupBoard = ({ rows, cols }) => {
	//#region INITIALISATION
	const [board, setBoard, resetBoard] = useBoardCreator(rows, cols);
	const [placementDirection, changePlacementDirection] = useShipPlacementDirection('horizontal');
	const { placeShip, placeShipsRandomly } = UseShipPlacer(board, rows, cols);
	const [shipPlacementQueue, setShipPlacementQueue, defaultShipPlacementQueue] = useShipPlacementQueue(
		placeShip
	);
	//#endregion

	const handlePlaceShip = (coords) => {
		//* execute function and save return value
		const couldBePlaced = shipPlacementQueue.returnFirstInQueue()(coords, placementDirection);

		if (couldBePlaced) {
			shipPlacementQueue.dequeue();
			setShipPlacementQueue(shipPlacementQueue);
			setBoard([...board]);
		}
	};

	const randomiseBoard = () => {
		handleResetBoard();
		placeShipsRandomly(defaultShipPlacementQueue, setShipPlacementQueue);
	};

	const handleResetBoard = () => {
		resetBoard();
		setShipPlacementQueue(defaultShipPlacementQueue);
	};

	return (
		<div onKeyDown={changePlacementDirection} tabIndex='0'>
			<Typography variant='h4'>Place Your Ships...</Typography>
			<Typography variant='caption'>Press 'A/D/LeftArrow/RightArrow to place horizontal</Typography>
			<Box ml={3}></Box>
			<Typography variant='caption'>Press 'W/S/UpArrow/DownArrow to place vertical</Typography>

			{board.map((rows) => {
				return (
					<Grid container justify='center'>
						{rows.map((cell) => {
							return (
								<Grid item>
									<GridCell
										placeBattleShip={handlePlaceShip}
										isBattleShip={cell.isBattleShip}
										coords={cell.coords}
										type={cell.type}
									/>
								</Grid>
							);
						})}
					</Grid>
				);
			})}
			<button onClick={randomiseBoard}>Randomise</button>
			<button onClick={handleResetBoard}>Reset</button>
		</div>
	);
};

SetupBoard.defaultProps = {
	rows: 10,
	cols: 10,
};

export default SetupBoard;
