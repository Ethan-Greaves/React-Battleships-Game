import useBoardScanner from './useBoardScanner';

const UseShipPlacer = (board, rows, cols) => {
	const { getRandomEmptyCell, isCellEmpty, isCellInGrid } = useBoardScanner(board, rows, cols);

	/** 
	 * Places a single cell (part of ship) on the board and saves the ship type
	 * @param coordOne {number} - The first board coordinate.
	 * @param coordTwo {number} - The second board coordinate.
	 * @param type {string} - The ship type that will be added to the cell object.
	 */
	const placeCell = (coordOne, coordTwo, type) => {
		board[coordOne][coordTwo].isBattleShip = !board[coordOne][coordTwo].isBattleShip;
		board[coordOne][coordTwo].type = type;
	};

	/**
	 *  Places a ship on the board, depending on if the ship is in the grid 
	 *  and all cells where it will be placed are empty.
	 *
	 *  @param x {number} - The x coord.
	 *  @param y {number} - The y coord.
	 *  @param amount {number} - The length of the ship/how many cells to check.
	 *  @param direction {string} - Will the ship be placed horizontal or vertical.
	 *  @param type {string} - Used to identify a specific ship.

	 *  @return {boolean} can the ship be placed or not.
	 */
	const placeShip = (x, y, amount, direction, type) => {
		if (direction === 'vertical') {
			for (let i = 0; i < amount; i++) if (!isCellInGrid(x - i) || !isCellEmpty(x - i, y)) return false;
			for (let i = 0; i < amount; i++) placeCell(x - i, y, type);
		} else {
			for (let i = 0; i < amount; i++) if (!isCellInGrid(y - i) || !isCellEmpty(x, y - i)) return false;
			for (let i = 0; i < amount; i++) placeCell(x, y - i, type);
		}
		return true;
	};

	/**
	 * Randomly places ships on the board until the ship placement queue is empty.
	 * If ship cant be placed, recursively re-run the function
	 */
	const placeShipsRandomly = (shipPlacementQueue, setShipPlacementQueue) => {
		while (shipPlacementQueue.getFirst()) {
			const { x, y } = getRandomEmptyCell().coords;
			const directions = ['vertical', 'horizontal'];
			const randDirection = directions[Math.floor(Math.random() * directions.length)];

			//* Execute function which is the value from the first in queue, save the return value
			const canBePlaced = shipPlacementQueue.returnFirstInQueue()(x, y, randDirection);
			if (!canBePlaced) return placeShipsRandomly(shipPlacementQueue, setShipPlacementQueue);

			shipPlacementQueue.dequeue();
			setShipPlacementQueue(shipPlacementQueue);
		}
	};

	//* Functions that will be enqueued in ship placement queue
	const placeCarrier = (x, y, direction) => placeShip(x, y, 5, direction, 'carrier');
	const placeBattleship = (x, y, direction) => placeShip(x, y, 4, direction, 'battleship');
	const placeCruiser = (x, y, direction) => placeShip(x, y, 3, direction, 'cruiser');
	const placeSubmarine = (x, y, direction) => placeShip(x, y, 3, direction, 'submarine');
	const placeDestroyer = (x, y, direction) => placeShip(x, y, 2, direction, 'destroyer');

	return {
		placeCarrier,
		placeBattleship,
		placeCruiser,
		placeSubmarine,
		placeDestroyer,
		placeShipsRandomly,
	};
};

export default UseShipPlacer;
