import { Typography } from '@material-ui/core';

const StatsInfo = ({ entity, totalHits, shipHits }) => {
	const calculateAccuracy = () => {
		// console.log(shipHits);
		return Math.round((shipHits / totalHits) * 100) || 0;
	};

	return (
		<div>
			<Typography variant="h5">{`${entity} Stats`}</Typography>
			<Typography variant="body1">{`Total Hits: ${totalHits}`}</Typography>
			<Typography variant="body1">{`Accuracy: ${calculateAccuracy()}%`}</Typography>
		</div>
	);
};
export default StatsInfo;
