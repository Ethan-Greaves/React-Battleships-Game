import React, { useState } from 'react';
import useBoardScanner from './useBoardScanner';

const UseShipPlacer = (board, rows, cols) => {
	const [modifiedBoard, setModifiedBoard] = useState(board);
	const { getRandomEmptyCell, isCellEmpty, isCellInGrid } = useBoardScanner(board, rows, cols);

	const placeShip = (x, y, amount, direction) => {
		const newBoard = modifiedBoard;
		switch (direction) {
			case 'vertical':
				//* check each cell, as soon as a cell is off grid cancel the whole ship placement
				for (let i = 0; i < amount; i++)
					if (!isCellInGrid(x - i) || !isCellEmpty(x - i, y)) return false;
				//* If we make it this far (don't return) then we know the ship can be placed
				for (let i = 0; i < amount; i++)
					newBoard[x - i][y].isBattleShip = !newBoard[x - i][y].isBattleShip;
				break;

			case 'horizontal':
				for (let i = 0; i < amount; i++)
					if (!isCellInGrid(y - i) || !isCellEmpty(x, y - i)) return false;
				for (let i = 0; i < amount; i++)
					newBoard[x][y - i].isBattleShip = !newBoard[x][y - i].isBattleShip;
				break;

			default:
				break;
		}

		setModifiedBoard([...newBoard]);
		return true;
	};

	const placeCarrier = (x, y, direction) => placeShip(x, y, 5, direction);
	const placeBattleship = (x, y, direction) => placeShip(x, y, 4, direction);
	const placeCruiser = (x, y, direction) => placeShip(x, y, 3, direction);
	const placeSubmarine = (x, y, direction) => placeCruiser(x, y, direction);
	const placeDestroyer = (x, y, direction) => placeShip(x, y, 2, direction);

	const placeShipsRandomly = (shipPlacementQueue, setShipPlacementQueue) => {
		while (shipPlacementQueue.getFirst()) {
			const { x, y } = getRandomEmptyCell().coords;
			const directions = ['vertical', 'horizontal'];
			const randDirection = directions[Math.floor(Math.random() * directions.length)];
			const canBePlaced = shipPlacementQueue.returnFirstInQueue()(x, y, randDirection);

			if (!canBePlaced) return placeShipsRandomly(shipPlacementQueue, setShipPlacementQueue);

			shipPlacementQueue.dequeue();
			setShipPlacementQueue(shipPlacementQueue);
			setModifiedBoard([...modifiedBoard]);
		}
	};

	return {
		placeCarrier,
		placeBattleship,
		placeCruiser,
		placeSubmarine,
		placeDestroyer,
		modifiedBoard,
		placeShipsRandomly,
	};
};

export default UseShipPlacer;
