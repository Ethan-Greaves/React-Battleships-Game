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
//#endregion
const SetupBoard = ({ rows, cols }) => {
	//#region INITIALISATION
	const [board, setBoard, resetBoard] = useBoardCreator(rows, cols);
	const [placementDirection, changePlacementDirection] =
		useShipPlacementDirection('horizontal');
	const { placeShip, placeShipsRandomly } = UseShipPlacer(board, rows, cols);
	const [shipPlacementQueue, setShipPlacementQueue, defaultShipPlacementQueue] =
		useShipPlacementQueue(placeShip);
	const { dispatch } = useContext(playerBoardContext);
	const [isReadyToPlay, setIsReadyToPlay] = useState(false);
	const { showPreview, removePreview } = useShipPreview(board, rows, cols);
	const styles = SetupBoardStyles();
	//#endregion

	const handlePlaceShip = (coords) => {
		//* execute function and save return value
		const couldBePlaced = shipPlacementQueue.returnFirstInQueue()(
			coords,
			placementDirection
		);

		if (couldBePlaced) {
			shipPlacementQueue.dequeue();
			setShipPlacementQueue(shipPlacementQueue);
			// shipPreviewQueue.dequeue();
			// setShipPreviewQueue(shipPreviewQueue);
			setBoard([...board]);
		}

		if (!shipPlacementQueue.getFirst()) setIsReadyToPlay(true);
	};

	const randomiseBoard = () => {
		handleResetBoard();
		placeShipsRandomly(defaultShipPlacementQueue, setShipPlacementQueue);
		setIsReadyToPlay(true);
	};

	const handleResetBoard = () => {
		resetBoard();
		setIsReadyToPlay(false);
		setShipPlacementQueue(defaultShipPlacementQueue);
		// setShipPreviewQueue(defaultShipPreviewQueue);
	};

	const handleShipPreview = (coords) => {
		showPreview(
			coords,
			shipPlacementQueue.getSize() <= 2
				? shipPlacementQueue.getSize() + 1
				: shipPlacementQueue.getSize(),
			placementDirection
		);
		setBoard([...board]);
	};

	const handleRemovePreview = (coords) => {
		removePreview(coords, shipPlacementQueue.getSize(), placementDirection);
		setBoard([...board]);
	};

	const shipNames = [
		'destroyer',
		'submarine',
		'cruiser',
		'battleship',
		'carrier',
	];

	return (
		<div onKeyDown={changePlacementDirection} tabIndex="0">
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
			<Button
				disabled={!isReadyToPlay}
				color="primary"
				variant="contained"
				onClick={() => dispatch({ type: 'SET_PLAYER_BOARD', board })}>
				<Link to="/gameSession">Let's play!</Link>
			</Button>
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
