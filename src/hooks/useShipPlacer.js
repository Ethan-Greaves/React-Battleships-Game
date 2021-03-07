import React, { useState } from 'react';

const UseShipPlacer = (board) => {
	const [modifiedBoard, setModifiedBoard] = useState(board);

	// getBoard() {
	// 	return board;
	// }
	const placeShip = (x, y, amount, direction) => {
		if (board[x][y].isBattleShip) {
			for (let i = 0; i < amount; i++) {
				//* set isBattleShip to be true or false
				switch (direction) {
					case 'up':
						setModifiedBoard(
							(modifiedBoard[x - i][y].isBattleShip = !modifiedBoard[x - i][y]
								.isBattleShip)
						);
						break;
					case 'down':
						setModifiedBoard(
							(modifiedBoard[x + i][y].isBattleShip = !modifiedBoard[x + i][y]
								.isBattleShip)
						);
						break;

					case 'left':
						setModifiedBoard(
							(modifiedBoard[x][y - i].isBattleShip = !modifiedBoard[x][y - i]
								.isBattleShip)
						);
						break;

					case 'right':
						setModifiedBoard(
							(modifiedBoard[x][y + i].isBattleShip = !modifiedBoard[x][y + i]
								.isBattleShip)
						);
						break;

					default:
						break;
				}
			}
		}
	};

	const placeCarrier = (x, y, direction) => {
		placeShip(x, y, 5, direction);
	};

	const placeBattleship = (x, y, direction) => {
		placeShip(x, y, 4, direction);
	};

	const placeCruiser = (x, y, direction) => {
		placeShip(x, y, 3, direction);
	};

	const placeSubmarine = (x, y, direction) => {
		placeCruiser(x, y, direction);
	};

	const placeDestroyer = (x, y, direction) => {
		placeShip(x, y, 2, direction);
	};

	return {
		placeCarrier,
		placeBattleship,
		placeCruiser,
		placeSubmarine,
		placeDestroyer,
		modifiedBoard,
	};
};

export default UseShipPlacer;
