const UseBoardScanner = (board, rows, cols) => {
	/**
	 * @returns {object} random cell from the board
	 */
	const getRandomCell = () => {
		return board[Math.floor(Math.random() * rows)][Math.floor(Math.random() * cols)];
	};

	/**
	 * @returns {object} random empty (non-battleship) cell from the board 
	 */
	const getRandomEmptyCell = () => {
		const randomCell = getRandomCell();
		if (randomCell.isBattleShip) return getRandomEmptyCell();
		return randomCell;
	};

	/**
	 * @returns {object} random empty (non-hit) cell from the board 
	 */
	 const getRandomNonHitCell = () => {
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
	const isCellInGrid = (x, y) => {
		if (x < 0 || y < 0 || x > rows || y > cols) return false;
		return true;
	};

	/**
	 * Checks to see if a cell is currently empty
	 * @param {number} x The X coordinate of the cell
	 * @param {number} y The Y coordinate of the cell
	 * @returns {boolean} False if cell is a ship, true if empty
	 */
	const isCellEmpty = (x, y) => {
		if (board[x][y].isBattleShip) return false;
		return true;
	};

	return { getRandomEmptyCell, isCellInGrid, isCellEmpty, getRandomNonHitCell };
};

export default UseBoardScanner;
