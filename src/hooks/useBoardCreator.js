import { useState } from 'react';

const UseBoardCreator = (rows, cols) => {
	/**
	 * Create a 2D array board with each cell being an object
	 * containing it's coordinates, isShip and isPreviewing
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
	// TODO is this necessary? why not re call create empty board then set state
	const resetBoard = () => {
		for (let x = 0; x < cols; x++) {
			for (let y = 0; y < rows; y++) {
				if (board[x][y].isBattleShip) board[x][y].isBattleShip = !board[x][y].isBattleShip;
				if (board[x][y].isPreviewing) board[x][y].isPreviewing = !board[x][y].isPreviewing;
			}
		}

		setBoard([...board]);
	};

	return [board, setBoard, resetBoard, createEmptyBoard];
};

export default UseBoardCreator;
