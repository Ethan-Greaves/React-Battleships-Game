import UseCollectStats from './useCollectStats';

const UseCollectStatsPlayer = () => {
	const { totalHits, shipHits, addTotalHit, addShipHit } = UseCollectStats();
	return {
		totalHitsPlayer: totalHits,
		shipHitsPlayer: shipHits,
		addTotalHitPlayer: addTotalHit,
		addShipHitPlayer: addShipHit,
	};
};
export default UseCollectStatsPlayer;
