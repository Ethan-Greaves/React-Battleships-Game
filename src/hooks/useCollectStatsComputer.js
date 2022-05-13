import UseCollectStats from './useCollectStats';

const UseCollectStatsComputer = () => {
	const { totalHits, shipHits } = UseCollectStats();
	return {
		totalHitsCpu: totalHits,
		shipHitsCpu: shipHits,
		// addTotalHitCpu: addTotalHit,
		// addShipHitCpu: addShipHit,
	};
};
export default UseCollectStatsComputer;
