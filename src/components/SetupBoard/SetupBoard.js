//#region IMPORTS
import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';
import useBoardCreator from '../../hooks/useBoardCreator';
import useShipPlacementDirection from '../../hooks/useShipPlacementDirection';
import useShipPlacementQueue from '../../hooks/useShipPlacementQueue';
import useShipPreview from '../../hooks/useShipPreview';
import UseShipPlacer from '../../hooks/useShipPlacer';
import { Link } from 'react-router-dom';
import { playerBoardContext } from '../../context/playerBoard.context';
import PlayerBoardSetup from '../Board/Board';
import GridCell from '../GridCell/GridCell';
import SetupBoardStyles from './SetupBoardStyles';
import useEventBus from '../../hooks/useEventBus';
//#endregion
const SetupBoard = ({ rows, cols }) => {
	//#region INITIALISATION
	const [board, setBoard, resetBoard] = useBoardCreator(rows, cols);
	const [placementDirection, changePlacementDirection] = useShipPlacementDirection('horizontal');
	const { placeShip, placeShipsRandomly } = UseShipPlacer(board, rows, cols);
	const [shipPlacementQueue, setShipPlacementQueue, defaultShipPlacementQueue] = useShipPlacementQueue(placeShip);
	// const { dispatch } = useContext(playerBoardContext);
	// const [isReadyToPlay, setIsReadyToPlay] = useState(false);
	const { showPreview, removePreview } = useShipPreview(board, rows, cols);
	const styles = SetupBoardStyles();
	const [currentHoveredCoordinates, setCurrentHoveredCoordinates] = useState({
		x: 0,
		y: 0,
	});
	//#endregion

	const handlePlaceShip = (coords) => {
		//* execute function and save return value
		const couldBePlaced = shipPlacementQueue.returnFirstInQueue()(coords, placementDirection);

		if (couldBePlaced) {
			shipPlacementQueue.dequeue();
			setShipPlacementQueue(shipPlacementQueue);
			useEventBus.dispatch('shipPlaced', { message: 'ship has been placed' });
			setBoard([...board]);
		}
	};

	const randomiseBoard = () => {
		handleResetBoard();
		placeShipsRandomly(defaultShipPlacementQueue, setShipPlacementQueue);
		useEventBus.dispatch('boardRandomized', { message: 'board has been randomized' });

		// setIsReadyToPlay(true);
	};

	const handleResetBoard = () => {
		resetBoard();
		// setIsReadyToPlay(false);
		setShipPlacementQueue(defaultShipPlacementQueue);
		useEventBus.dispatch('boardReset', { message: 'board has been reset' });
	};

	const handleShipPreview = (coords) => {
		console.log(coords);
		setCurrentHoveredCoordinates(coords);
		showPreview(coords, fixShipSize(), placementDirection);
		setBoard([...board]);
	};

	const handleRemovePreview = (coords) => {
		removePreview(coords, fixShipSize(), placementDirection);
		setBoard([...board]);
	};

	const shipNames = ['destroyer', 'submarine', 'cruiser', 'battleship', 'carrier'];

	/**
	 * Turns size from "5,4,3,2,1" to "5,4,3,3,2", so it aligns with the length of every battleship
	 * @returns int Ship placement queue size
	 */
	const fixShipSize = () => {
		return shipPlacementQueue.getSize() <= 2 ? shipPlacementQueue.getSize() + 1 : shipPlacementQueue.getSize();
	};

	return (
		<div
			onKeyDown={(e) => {
				handleRemovePreview(currentHoveredCoordinates);
				changePlacementDirection(e);
			}}
			tabIndex="0">
			<h1>Currently placing {shipNames[shipPlacementQueue.getSize() - 1]}</h1>
			<div className={styles.board}>
				<PlayerBoardSetup
					boardData={board}
					render={(cell) => {
						return (
							<GridCell
								clickFunction={handlePlaceShip}
								hoverFunction={handleShipPreview}
								hoverExitFunction={handleRemovePreview}
								isBattleShip={cell.isBattleShip}
								isPreviewing={cell.isPreviewing}
								isUnplaceable={cell.isUnplaceable}
								coords={cell.coords}
								type={cell.type}
							/>
						);
					}}
				/>
			</div>

			<button onClick={randomiseBoard}>Randomise</button>
			<button onClick={handleResetBoard}>Reset</button>
			{/* <Button
				disabled={!isReadyToPlay}
				color="primary"
				variant="contained"
				onClick={() => dispatch({ type: 'SET_PLAYER_BOARD', board })}>
				<Link to="/gameSession">Let's play!</Link>
			</Button> */}
		</div>
	);
};

//#region DEFAULT PROPS
SetupBoard.defaultProps = {
	rows: 10,
	cols: 10,
};
//#endregion
export default SetupBoard;
