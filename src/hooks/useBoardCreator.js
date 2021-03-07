import React, { useState } from 'react';

const UseBoardCreator = (rows, cols) => {
	const createEmptyBoard = () => {
		const gridArr = [];
		for (let x = 0; x < cols; x++) {
			const rowArr = [];
			for (let y = 0; y < rows; y++) {
				rowArr.push({ coords: { x, y }, isBattleShip: false });
			}
			gridArr.push(rowArr);
		}

		return gridArr;
	};

	const [board, setBoard] = useState(createEmptyBoard());

	return [board, setBoard, createEmptyBoard];
};

export default UseBoardCreator;
