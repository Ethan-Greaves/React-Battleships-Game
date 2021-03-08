import React, { useState } from 'react';

const UseShipPlacer = (board) => {
	const [modifiedBoard, setModifiedBoard] = useState(board);

	const placeShip = (x, y, amount, direction) => {
		if (!board[x][y].isBattleShip) {
			const newBoard = modifiedBoard;
			switch (direction) {
				case 'up':
					//* check each cell, as soon as a cell is off grid cancel the ship placement
					for (let i = 0; i < amount; i++) if (x - i < 0) return false;
					//* If we make it this far (don't return) then we know the ship can be placed
					for (let i = 0; i < amount; i++)
						newBoard[x - i][y].isBattleShip = !newBoard[x - i][y].isBattleShip;
					break;
				case 'down':
					//TODO 10 is hard coded, need to pass through row/col length
					for (let i = 0; i < amount; i++) if (x + i > 10) return false;
					for (let i = 0; i < amount; i++)
						newBoard[x + i][y].isBattleShip = !newBoard[x + i][y].isBattleShip;
					break;

				case 'left':
					for (let i = 0; i < amount; i++) if (y - i < 0) return false;
					for (let i = 0; i < amount; i++)
						newBoard[x][y - i].isBattleShip = !newBoard[x][y - i].isBattleShip;
					break;

				case 'right':
					for (let i = 0; i < amount; i++) if (y + i > 10) return false;
					for (let i = 0; i < amount; i++)
						newBoard[x][y + i].isBattleShip = !newBoard[x][y + i].isBattleShip;
					break;

				default:
					break;
			}

			setModifiedBoard([...newBoard]);
			return true;
		}
	};

	const placeCarrier = (x, y, direction) => placeShip(x, y, 5, direction);
	const placeBattleship = (x, y, direction) => placeShip(x, y, 4, direction);
	const placeCruiser = (x, y, direction) => placeShip(x, y, 3, direction);
	const placeSubmarine = (x, y, direction) => placeCruiser(x, y, direction);
	const placeDestroyer = (x, y, direction) => placeShip(x, y, 2, direction);

	const placeAllShipsRandomly = () => {};

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
