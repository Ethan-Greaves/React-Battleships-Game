import { Typography, Box } from '@material-ui/core';
import UseGameCalculations from '../../hooks/useGameClaculations';
import generalStyles from '../../generalCSS/generalStyle';

const StatsInfo = ({ name, totalHits, shipHits, currentHitStreak }) => {
	const { calculateAccuracy } = UseGameCalculations();
	const generalStyle = generalStyles();

	return (
		<div className={generalStyle.transparentBackground}>
			<Typography align='center'>
				<Typography variant='h6'>
					<Box fontWeight={'bold'}>{`${name} Stats`}</Box>
				</Typography>
				<Typography variant='body1'>{`Total Hits: ${totalHits}`}</Typography>
				<Typography variant='body1'>{`Accuracy: ${calculateAccuracy(shipHits, totalHits)}%`}</Typography>
				<Typography variant='body1'>{`Hit Streak: ${currentHitStreak}`}</Typography>
				<Typography variant='body1'>{`Highest Streak: ${currentHitStreak}`}</Typography>
			</Typography>
		</div>
	);
};
export default StatsInfo;
