import { useState } from 'react';

const UseCollectStats = () => {
	const [totalHits, setTotalHits] = useState(0);
	const [shipHits, setShipHits] = useState(0);

	const addTotalHit = () => {
		setTotalHits(totalHits + 1);
	};

	const addShipHit = () => {
		setShipHits(shipHits + 1);
	};

	return {totalHits, shipHits, addTotalHit, addShipHit};
};
export default UseCollectStats;
