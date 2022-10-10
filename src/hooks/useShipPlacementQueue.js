import { useState, useContext } from 'react';
import Queue from '../classes/Queue/queue';
import { settingsContext } from '../context/settings.context';

const UseShipPlacementQueue = (placeShip) => {
	//#region QUEUE SETUP
	const defaultShipPlacementQueue = new Queue();
	const { totalShips } = useContext(settingsContext);

	const defaultShipArr = [
		{ length: 2, type: 'destroyer' },
		{ length: 3, type: 'submarine' },
		{ length: 3, type: 'cruiser' },
		{ length: 4, type: 'battleship' },
		{ length: 5, type: 'carrier' },
	];
	const shipArr = [];

	for (let i = 0; i <= totalShips; i++) {
		shipArr.unshift(defaultShipArr[i]);
	}

	for (let i = 0; i < shipArr.length; i++) {
		defaultShipPlacementQueue.enqueue((coords, direction) =>
			placeShip(coords, shipArr[i].length, direction, shipArr[i].type)
		);
	}
	//#endregion

	const [shipPlacementQueue, setShipPlacementQueue] = useState(defaultShipPlacementQueue);
	return [shipPlacementQueue, setShipPlacementQueue, defaultShipPlacementQueue];
};

export default UseShipPlacementQueue;
