import { useState } from 'react';

const UseBoardCreator = (rows = 10, cols = 10) => {
	/**
	 * Create a 2D array board with each cell being an object
	 * containing it's coordinates, isShip, isPreviewing and more
	 * @returns {array} The grid that has been created
	 */
	const createEmptyBoard = () => {
		const gridArr = [];
		for (let x = 0; x < cols; x++) {
			const rowArr = [];
			for (let y = 0; y < rows; y++) {
				rowArr.push({
					coords: { x, y },
					isBattleShip: false,
					isPreviewing: false,
					isUnplaceable: false,
					isHit: false,
					isDestroyed: false,
					type: '',
					isShipBottom: false,
					isShipMiddle: false,
					isShipTop: false,
					direction: '',
				});
			}
			gridArr.push(rowArr);
		}

		return gridArr;
	};

	const [board, setBoard] = useState(createEmptyBoard());

	/**
	 * Loops through the board and turns any isShip values to false
	 */
	const resetBoard = () => {
		for (let x = 0; x < cols; x++) {
			for (let y = 0; y < rows; y++) {
				if (board[x][y].isBattleShip) board[x][y].isBattleShip = !board[x][y].isBattleShip;
				if (board[x][y].isPreviewing) board[x][y].isPreviewing = !board[x][y].isPreviewing;
				board[x][y].isDestroyed = false;
				board[x][y].type = '';
				board[x][y].isHit = false;
				board[x][y].isShipBottom = false;
				board[x][y].isShipMiddle = false;
				board[x][y].isShipTop = false;
				board[x][y].direction = '';
			}
		}

		setBoard([...board]);
	};

	return [board, setBoard, resetBoard, createEmptyBoard];
};

export default UseBoardCreator;
