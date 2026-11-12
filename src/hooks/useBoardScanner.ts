import type { Board, Cell, Coord, ShipType } from '../types/game';

const UseBoardScanner = (board: Board, rows: number, cols: number) => {
	/**
	 * @returns {object} random cell from the board
	 */
	const getRandomCell = (): Cell => {
		return board[Math.floor(Math.random() * rows)][Math.floor(Math.random() * cols)];
	};

	/**
	 * @returns {object} random empty (non-battleship) cell from the board
	 */
	const getRandomEmptyCell = (): Cell => {
		const randomCell = getRandomCell();
		if (randomCell.isBattleShip) return getRandomEmptyCell();
		return randomCell;
	};

	/**
	 * @returns {object} random empty (non-hit) cell from the board
	 */
	const getRandomNonHitCell = (): Cell => {
		const randomCell = getRandomCell();
		if (randomCell.isHit) return getRandomNonHitCell();
		return randomCell;
	};

	/**
	 * Check to see if cell is in the grid
	 * @param {number} coord The coordinate to check if cell is in grid
	 * @returns {boolean}
	 */
	// TODO This function should be re-factored to check whole cell rather than one coord
	const isCellInGrid = (x: number, y: number): boolean => {
		if (x < 0 || y < 0 || x >= rows || y > cols) return false;
		return true;
	};

	/**
	 * Checks to see if a cell is currently empty
	 * @param {number} x The X coordinate of the cell
	 * @param {number} y The Y coordinate of the cell
	 * @returns {boolean} False if cell is a ship, true if empty
	 */
	const isCellEmpty = (x: number, y: number) => {
		if (board[x][y].isBattleShip) return false;
		return true;
	};

	const getCellCoordsOfType = (type: ShipType): Coord[] => {
		const typeArr: Coord[] = [];
		for (let x = 0; x < cols; x++) {
			for (let y = 0; y < rows; y++) {
				if (board[x][y].type === type)
					typeArr.push({
						x,
						y,
					});
			}
		}

		return typeArr;
	};

	return {
		getRandomEmptyCell,
		isCellInGrid,
		isCellEmpty,
		getRandomNonHitCell,
		getCellCoordsOfType,
	};
};

export default UseBoardScanner;
