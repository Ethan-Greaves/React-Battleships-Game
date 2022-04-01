import { useState } from 'react';
import Queue from '../classes/Queue/queue';

const UseShipPlacementQueue = (placeShip) => {
	//#region QUEUE SETUP
	const defaultShipPlacementQueue = new Queue();
	defaultShipPlacementQueue.enqueue((coords, direction) =>
		placeShip(coords, 5, direction, 'carrier')
	);
	defaultShipPlacementQueue.enqueue((coords, direction) =>
		placeShip(coords, 4, direction, 'battleship')
	);
	defaultShipPlacementQueue.enqueue((coords, direction) =>
		placeShip(coords, 3, direction, 'cruiser')
	);
	defaultShipPlacementQueue.enqueue((coords, direction) =>
		placeShip(coords, 3, direction, 'submarine')
	);
	defaultShipPlacementQueue.enqueue((coords, direction) =>
		placeShip(coords, 2, direction, 'destroyer')
	);
	//#endregion

	const [shipPlacementQueue, setShipPlacementQueue] = useState(
		defaultShipPlacementQueue
	);
	return [shipPlacementQueue, setShipPlacementQueue, defaultShipPlacementQueue];
};

export default UseShipPlacementQueue;
