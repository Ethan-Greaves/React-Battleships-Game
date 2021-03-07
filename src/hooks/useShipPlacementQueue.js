import React, { useState } from 'react';
import Queue from '../classes/Queue/queue';

const UseShipPlacementQueue = (boardEditor) => {
	//#region QUEUE SETUP
	const defaultShipPlacementQueue = new Queue();
	defaultShipPlacementQueue.enqueue((x, y, direction) => boardEditor.placeCarrier(x, y, direction));
	defaultShipPlacementQueue.enqueue((x, y, direction) => boardEditor.placeBattleship(x, y, direction));
	defaultShipPlacementQueue.enqueue((x, y, direction) => boardEditor.placeCruiser(x, y, direction));
	defaultShipPlacementQueue.enqueue((x, y, direction) => boardEditor.placeSubmarine(x, y, direction));
	defaultShipPlacementQueue.enqueue((x, y, direction) => boardEditor.placeDestroyer(x, y, direction));
	//#endregion
	const [shipPlacementQueue, setShipPlacementQueue] = useState(defaultShipPlacementQueue);
	console.log(shipPlacementQueue);
	return [shipPlacementQueue, setShipPlacementQueue, defaultShipPlacementQueue];
};

export default UseShipPlacementQueue;
