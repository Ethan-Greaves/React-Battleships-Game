const UseBoardScanner = (board, rows, cols) => {
	const getRandomCell = () => {
		return board[Math.floor(Math.random() * rows)][Math.floor(Math.random() * cols)];
	};

	const getRandomEmptyCell = () => {
		const randomCell = getRandomCell();
		if (randomCell.isBattleShip) return getRandomEmptyCell();
		return randomCell;
	};

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
