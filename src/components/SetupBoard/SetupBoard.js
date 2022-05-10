//#region IMPORTS
import React, { useContext, useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import useBoardCreator from '../../hooks/useBoardCreator';
import useShipPlacementDirection from '../../hooks/useShipPlacementDirection';
import useShipPlacementQueue from '../../hooks/useShipPlacementQueue';
import useShipPreview from '../../hooks/useShipPreview';
import UseShipPlacer from '../../hooks/useShipPlacer';
import PlayerBoardSetup from '../Board/Board';
import GridCell from '../GridCell/GridCell';
import SetupBoardStyles from './SetupBoardStyles';
import useEventBus from '../../hooks/useEventBus';
import useAudio from '../../hooks/useAudio';
import retroChimeSfx from '../../assets/sfx/RetroChime.wav';
import { settingsContext } from '../../context/settings.context';

//#endregion
const SetupBoard = () => {
	//#region INITIALISATION
	const { boardSize } = useContext(settingsContext);
	const [board, setBoard, resetBoard] = useBoardCreator(boardSize.rows, boardSize.cols);
	const [placementDirection, changePlacementDirection] = useShipPlacementDirection('horizontal');
	const { placeShip, placeShipsRandomly } = UseShipPlacer(board, boardSize.rows, boardSize.cols);
	const [shipPlacementQueue, setShipPlacementQueue, defaultShipPlacementQueue] = useShipPlacementQueue(placeShip);
	const { showPreview, removePreview } = useShipPreview(board, boardSize.rows, boardSize.cols);
	const styles = SetupBoardStyles();
	const [currentHoveredCoordinates, setCurrentHoveredCoordinates] = useState({
		x: 0,
		y: 0,
	});
	const [playingRetroChime, toggleRetroChime] = useAudio(retroChimeSfx, false);

	//#endregion

	useEffect(() => {
		useEventBus.dispatch('boardUpdated', { board });
	}, [board]);

	const handlePlaceShip = (coords) => {
		//* execute function and save return value
		const couldBePlaced = shipPlacementQueue.returnFirstInQueue()(coords, placementDirection);

		if (couldBePlaced) {
			shipPlacementQueue.dequeue();
			toggleRetroChime();
			setShipPlacementQueue(shipPlacementQueue);
			useEventBus.dispatch('shipPlaced', { message: 'ship has been placed', board });
			setBoard([...board]);
		}
	};

	const randomiseBoard = () => {
		handleResetBoard();
		placeShipsRandomly(defaultShipPlacementQueue, setShipPlacementQueue);
		toggleRetroChime();
		useEventBus.dispatch('boardRandomized', { message: 'board has been randomized' });
	};

	const handleResetBoard = () => {
		resetBoard();
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
								computerBoardCell={false}
								type={cell.type}
							/>
						);
					}}
				/>
			</div>

			<button onClick={randomiseBoard}>Randomise</button>
			<button onClick={handleResetBoard}>Reset</button>
		</div>
	);
};

//#endregion
export default SetupBoard;
