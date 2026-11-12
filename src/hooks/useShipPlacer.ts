import type { Board, Coord, Orientation, ShipType } from '../types/game';
import useBoardScanner from './useBoardScanner';

interface PlacementQueue {
	getFirst(): unknown;
	returnFirstInQueue(): (coords: Coord, direction: Orientation) => boolean;
	dequeue(): unknown;
}

const UseShipPlacer = (board: Board, rows: number, cols: number) => {
	const { getRandomEmptyCell, isCellEmpty, isCellInGrid } = useBoardScanner(board, rows, cols);

	/**
	 * Places a single cell (part of ship) on the board and saves the ship type
	 * @param coordOne {number} - The first board coordinate.
	 * @param coordTwo {number} - The second board coordinate.
	 * @param type {string} - The ship type that will be added to the cell object.
	 */
	const placeCell = (
		coordOne: number,
		coordTwo: number,
		type: ShipType,
		i: number,
		amount: number,
		direction: Orientation,
	) => {
		board[coordOne][coordTwo].isBattleShip = !board[coordOne][coordTwo].isBattleShip;
		board[coordOne][coordTwo].type = type;

		if (i === 0) board[coordOne][coordTwo].isShipBottom = true;
		else if (i === amount - 1) board[coordOne][coordTwo].isShipTop = true;
		else board[coordOne][coordTwo].isShipMiddle = true;

		board[coordOne][coordTwo].direction = direction;
	};

	/**
	 *  Places a ship on the board, depending on if the ship is in the grid
	 *  and all cells where it will be placed are empty.
	 *
	 * @param coords {object} - The x, y cell coordinates of where the ship is being placed
	 *  @param amount {number} - The length of the ship/how many cells to check.
	 *  @param direction {string} - Will the ship be placed horizontal or vertical.
	 *  @param type {string} - Used to identify a specific ship.

	 *  @return {boolean} can the ship be placed or not.
	*/
	const placeShip = (
		coords: Coord,
		amount: number,
		direction: Orientation,
		type: ShipType,
	): boolean => {
		const { x, y } = coords;
		if (direction === 'vertical') {
			for (let i = 0; i < amount; i++)
				if (!isCellInGrid(x - i, y) || !isCellEmpty(x - i, y)) return false;
			for (let i = 0; i < amount; i++) placeCell(x - i, y, type, i, amount, direction);
		} else {
			for (let i = 0; i < amount; i++)
				if (!isCellInGrid(x, y - i) || !isCellEmpty(x, y - i)) return false;
			for (let i = 0; i < amount; i++) placeCell(x, y - i, type, i, amount, direction);
		}
		return true;
	};

	/**
	 * Randomly places ships on the board until the ship placement queue is empty.
	 * If ship cant be placed, recursively re-run the function
	 */
	const placeShipsRandomly = (
		shipPlacementQueue: PlacementQueue,
		setShipPlacementQueue: (queue: PlacementQueue) => void,
	): void => {
		while (shipPlacementQueue.getFirst()) {
			const directions: Orientation[] = ['vertical', 'horizontal'];
			const randomDirection = directions[Math.floor(Math.random() * directions.length)];

			//* Execute function which is the value from the first in queue, save the return value of said function
			const canBePlaced = shipPlacementQueue.returnFirstInQueue()(
				getRandomEmptyCell().coords,
				randomDirection,
			);
			if (!canBePlaced) return placeShipsRandomly(shipPlacementQueue, setShipPlacementQueue);

			shipPlacementQueue.dequeue();
			setShipPlacementQueue(shipPlacementQueue);
		}
	};

	return {
		placeShip,
		placeShipsRandomly,
	};
};

export default UseShipPlacer;
