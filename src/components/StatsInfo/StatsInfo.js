import { Typography, Box } from '@material-ui/core';
import UseGameCalculations from '../../hooks/useGameClaculations';

const StatsInfo = ({ totalHits, shipHits }) => {
	const { calculateAccuracy } = UseGameCalculations();

	return (
		<div>
			<Typography align="center">
				<Typography variant="h6">
					<Box fontWeight={'bold'}>{`Your Stats`}</Box>
				</Typography>
				<Typography variant="body1">{`Total Hits: ${totalHits}`}</Typography>
				<Typography variant="body1">{`Accuracy: ${calculateAccuracy(shipHits, totalHits)}%`}</Typography>
			</Typography>
		</div>
	);
};
export default StatsInfo;
