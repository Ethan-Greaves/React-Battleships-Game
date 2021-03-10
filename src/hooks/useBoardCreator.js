import React, { useState } from 'react';

const UseBoardCreator = (rows, cols) => {
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

	const resetBoard = () => {
		const resetBoard = board;
		for (let x = 0; x < cols; x++) {
			for (let y = 0; y < rows; y++) {
				if (resetBoard[x][y].isBattleShip)
					resetBoard[x][y].isBattleShip = !resetBoard[x][y].isBattleShip;
			}
		}

		setBoard([...resetBoard]);
	};

	return [board, setBoard, resetBoard, createEmptyBoard];
};

export default UseBoardCreator;
