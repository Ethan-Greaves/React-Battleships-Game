import { useState } from 'react';

const UseBoardCreator = (rows, cols) => {
	/**
	 * Create a 2D array board with each cell being an object
	 * containing it's coordinates, isShip and isPreviewing
	 * @returns {array} Returns the grid that has been created
	 */
	const createEmptyBoard = () => {
		const gridArr = [];
		for (let x = 0; x < cols; x++) {
			const rowArr = [];
			for (let y = 0; y < rows; y++) {
				rowArr.push({ coords: { x, y }, isBattleShip: false, isPreviewing: false });
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
			}
		}

		setBoard([...board]);
	};

	return [board, setBoard, resetBoard, createEmptyBoard];
};

export default UseBoardCreator;
