import React, { useContext, useEffect, useState } from 'react';
import useBoardCreator from '../../hooks/useBoardCreator';
import { settingsContext } from '../../context/settings.context';
import UseShipPlacer from '../../hooks/useShipPlacer';
import useShipPlacementQueue from '../../hooks/useShipPlacementQueue';
import ComputerBoardSetup from '../Board/Board';
import GridCell from '../GridCell/GridCell';
import UseShipDestroyer from '../../hooks/useShipDestroyer';

const ComputerBoard = () => {
	const { boardSize } = useContext(settingsContext);
	const [board, setBoard, resetBoard] = useBoardCreator(boardSize.rows, boardSize.cols);
	const { placeShip, placeShipsRandomly } = UseShipPlacer(board, boardSize.rows, boardSize.cols);
	const [shipPlacementQueue, setShipPlacementQueue, defaultShipPlacementQueue] = useShipPlacementQueue(placeShip);
	const [carrierHitCount, setCarrierHitCount] = useState(0);
	const [battleshipHitCount, setBattleshipHitCount] = useState(0);
	const [cruiserHitCount, setCruiserHitCount] = useState(0);
	const [submarineHitCount, setSubmarineHitCount] = useState(0);
	const [destroyerHitCount, setDestroyerHitCount] = useState(0);
	const [addHitToShip, checkToDestroy] = UseShipDestroyer(board);

	useEffect(() => {
		randomiseBoard();
	}, []);

	console.log(board);

	const randomiseBoard = () => {
		handleResetBoard();
		placeShipsRandomly(defaultShipPlacementQueue, setShipPlacementQueue);
	};

	const handleResetBoard = () => {
		resetBoard();
		setShipPlacementQueue(defaultShipPlacementQueue);
	};

	const handleClick = (coords, isBattleShip, type) => {
		const { x, y } = coords;
		const newBoard = [...board];
		newBoard[x][y].isHit = true;
		setBoard(newBoard);
		addHitToShip(type);
		console.log(type);

		// switch (type) {
		// 	case 'carrier':
		// 		setCarrierHitCount(carrierHitCount + 1);
		// 		break;
		// 	default:
		// 		break;
		// }
	};

	return (
		<div>
			<ComputerBoardSetup
				boardData={board}
				render={(cell) => {
					return (
						<GridCell
							clickFunction={handleClick}
							hoverFunction={() => {
								return;
							}}
							hoverExitFunction={() => {
								return;
							}}
							isBattleShip={cell.isBattleShip}
							isPreviewing={cell.isPreviewing}
							isUnplaceable={cell.isUnplaceable}
							isHit={cell.isHit}
							coords={cell.coords}
							computerBoardCell={true}
							type={cell.type}
						/>
					);
				}}
			/>
		</div>
	);
};
export default ComputerBoard;
