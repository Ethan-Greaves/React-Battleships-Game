import React, { useContext } from 'react';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import useBoardCreator from '../../hooks/useBoardCreator';
import useShipPlacementDirection from '../../hooks/useShipPlacementDirection';
import useShipPlacementQueue from '../../hooks/useShipPlacementQueue';
import UseShipPlacer from '../../hooks/useShipPlacer';
import { Link } from 'react-router-dom';
import { playerBoardContext } from '../../context/playerBoard.context';
import PlayerBoardSetup from '../Board/Board';
import GridCell from '../GridCell/GridCell';

const SetupBoard = ({ rows, cols }) => {
	//#region INITIALISATION
	const [board, setBoard, resetBoard] = useBoardCreator(rows, cols);
	const [placementDirection, changePlacementDirection] = useShipPlacementDirection('horizontal');
	const { placeShip, placeShipsRandomly } = UseShipPlacer(board, rows, cols);
	const [
		shipPlacementQueue,
		setShipPlacementQueue,
		defaultShipPlacementQueue,
	] = useShipPlacementQueue(placeShip);
	const { dispatch } = useContext(playerBoardContext);
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
		<div onKeyDown={changePlacementDirection} tabIndex="0">
			<Typography variant="h4">Place Your Ships...</Typography>
			<Typography variant="caption">Press 'A/D/LeftArrow/RightArrow to place horizontal</Typography>
			<Box ml={3}></Box>
			<Typography variant="caption">Press 'W/S/UpArrow/DownArrow to place vertical</Typography>

			<PlayerBoardSetup
				boardData={board}
				render={(cell) => {
					return (
						<GridCell
							clickFunction={handlePlaceShip}
							isBattleShip={cell.isBattleShip}
							coords={cell.coords}
							type={cell.type}
						/>
					);
				}}
			/>

			<button onClick={randomiseBoard}>Randomise</button>
			<button onClick={handleResetBoard}>Reset</button>
			<Link to="/gameSession">
				<Button
					color="primary"
					variant="contained"
					onClick={() => dispatch({ type: 'SET_PLAYER_BOARD', board })}>
					Let's play!
				</Button>
			</Link>
		</div>
	);
};

SetupBoard.defaultProps = {
	rows: 10,
	cols: 10,
};

export default SetupBoard;
