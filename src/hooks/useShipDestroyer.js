import React, { useState } from 'react';

const UseShipDestroyer = (board) => {
	const [carrierHitCount, setCarrierHitCount] = useState(0);
	const [battleshipHitCount, setBattleshipHitCount] = useState(0);
	const [cruiserHitCount, setCruiserHitCount] = useState(0);
	const [submarineHitCount, setSubmarineHitCount] = useState(0);
	const [destroyerHitCount, setDestroyerHitCount] = useState(0);
	const [shipDetails, setShipDetails] = useState([
		{
			type: 'carrier',
			size: 5,
			hitCount: 0,
		},
		{
			type: 'battleship',
			size: 4,
			hitCount: 0,
		},
		{
			type: 'cruiser',
			size: 3,
			hitCount: 0,
		},
		{
			type: 'submarine',
			size: 3,
			hitCount: 0,
		},
		{
			type: 'destroyer',
			size: 2,
			hitCount: 0,
		},
	]);

	// const addHitToShip = (type) => {
	// 	if (type === undefined || type === null) return;
	// 	for (let i = 0; i < shipDetails.length; i++) {
	// 		if (shipDetails[i].type === type) {
	// 			// console.log(`shipDetails[i].type: ${shipDetails[i].type}`);
	// 			// console.log(`type: ${type}`);
	// 			setShipDetails(shipDetails[i].hitCount += 1);
	// 			console.log(shipDetails[i].hitCount);
	// 		}
	// 	}
	// };

	const addHitToShip = (type) => {
		switch (type) {
			case 'carrier': {
				setCarrierHitCount(carrierHitCount + 1);
				break;
			}
			default:
				break;
		}
		// console.log(carrierHitCount);
	};

	const checkToDestroy = () => {};

	return [addHitToShip, checkToDestroy];
};
export default UseShipDestroyer;
