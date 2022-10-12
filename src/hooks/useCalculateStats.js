import { useState, useEffect } from 'react';

const UseCalculateStats = () => {
	const [totalHits, setTotalHits] = useState(0);
	const [shipHits, setShipHits] = useState(0);
	const [currentHitStreak, setCurrentHitStreak] = useState(0);
	const [highestStreak, setHighestStreak] = useState(0);

	useEffect(() => {
		checkHighestStreak();
	}, [currentHitStreak]);

	const addTotalHit = () => setTotalHits(totalHits + 1);
	const addShipHit = () => setShipHits(shipHits + 1);
	const addHitToStreak = () => setCurrentHitStreak(currentHitStreak + 1);
	const resetStreak = () => setCurrentHitStreak(0);
	const checkHighestStreak = () => highestStreak <= currentHitStreak && setHighestStreak(currentHitStreak);

	return [totalHits, shipHits, currentHitStreak, highestStreak, addTotalHit, addShipHit, addHitToStreak, resetStreak];
};
export default UseCalculateStats;
