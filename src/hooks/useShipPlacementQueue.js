import { useState } from 'react';
import Queue from '../classes/Queue/queue';

const UseShipPlacementQueue = (
	placeCarrier,
	placeBattleship,
	placeCruiser,
	placeSubmarine,
	placeDestroyer
) => {
	//#region QUEUE SETUP
	const defaultShipPlacementQueue = new Queue();
	defaultShipPlacementQueue.enqueue((x, y, direction) => placeCarrier(x, y, direction));
	defaultShipPlacementQueue.enqueue((x, y, direction) => placeBattleship(x, y, direction));
	defaultShipPlacementQueue.enqueue((x, y, direction) => placeCruiser(x, y, direction));
	defaultShipPlacementQueue.enqueue((x, y, direction) => placeSubmarine(x, y, direction));
	defaultShipPlacementQueue.enqueue((x, y, direction) => placeDestroyer(x, y, direction));
	//#endregion
	const [shipPlacementQueue, setShipPlacementQueue] = useState(defaultShipPlacementQueue);
	return [shipPlacementQueue, setShipPlacementQueue, defaultShipPlacementQueue];
};

export default UseShipPlacementQueue;
