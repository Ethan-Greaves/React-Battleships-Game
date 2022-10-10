//#region IMPORTS
import React, { useEffect } from 'react';
import PlayerBoardSetup from '../Board/Board';
import GridCell from '../GridCell/GridCell';
import SetupBoardStyles from './SetupBoardStyles';
import useEventBus from '../../hooks/useEventBus';
import generalStyles from '../../generalCSS/generalStyle';

//#endregion
const SetupBoard = ({ board, setBoard, placementDirection, shipPlacementQueue, setShipPlacementQueue, showPreview, removePreview }) => {
	//#region INITIALISATION
	const generalStyle = generalStyles();
	const styles = SetupBoardStyles();
	//#endregion

	useEffect(() => {
		useEventBus.dispatch('boardUpdated', { board });
	}, [board]);

	const handlePlaceShip = (coords) => {
		//* execute function and save return value
		const couldBePlaced = shipPlacementQueue.returnFirstInQueue()(coords, placementDirection);

		if (couldBePlaced) {
			shipPlacementQueue.dequeue();
			setShipPlacementQueue(shipPlacementQueue);
			useEventBus.dispatch('shipPlaced', { message: 'ship has been placed', board });
			setBoard([...board]);
		}
	};

	const handleShipPreview = (coords) => {
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
		<div tabIndex='0'>
			<div className={`${styles.board} ${generalStyle.boardBackground}`}>
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
								isDestroyed={cell.isDestroyed}
								placementDirection={cell.direction}
								isShipTop={cell.isShipTop}
								isShipMiddle={cell.isShipMiddle}
								isShipBottom={cell.isShipBottom}
							/>
						);
					}}
				/>
			</div>
		</div>
	);
};

//#endregion
export default SetupBoard;
