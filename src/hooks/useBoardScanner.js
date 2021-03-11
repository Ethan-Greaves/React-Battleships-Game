const UseBoardScanner = (board, rows, cols) => {
	const getRandomCell = () => {
		return board[Math.floor(Math.random() * rows)][Math.floor(Math.random() * cols)];
    };
    
	const getRandomEmptyCell = () => {
		const randomCell = getRandomCell();
		if (randomCell.isBattleShip) return getRandomEmptyCell();
		return randomCell;
	};

	/**
	 * Check to see if cell is in the grid
	 * @param {number} coord The coordinate to check if cell is in grid    
	 * @returns {boolean} 
	 */
	// TODO This function should be re-factored to check whole cell rather than one coord
	const isCellInGrid = (coord) => {
		if (coord < 0 || coord > rows || coord > cols) return false;
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

	return { getRandomEmptyCell, isCellInGrid, isCellEmpty };
};

export default UseBoardScanner;
