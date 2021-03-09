const UseBoardScanner = (board, rows, cols) => {
	const getRandomEmptyCell = () => {
		const randomCell = board[Math.floor(Math.random() * rows)][Math.floor(Math.random() * cols)];
		if (randomCell.isBattleShip) return getRandomEmptyCell();
		return randomCell;
	};

	//* Checks to see if the cell is in the grid and if it is empty
	const isCellInGrid = (num) => {
		if (num < 0 || num > rows || num > cols) return false;
		return true;
	};

	const isCellEmpty = (x, y) => {
		if (board[x][y].isBattleShip) return false;
		return true;
	};

	return { getRandomEmptyCell, isCellInGrid, isCellEmpty };
};

export default UseBoardScanner;
