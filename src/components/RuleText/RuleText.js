import { Box, Typography } from '@material-ui/core';
import RuleTextStyles from './RuleTextStyles';

const RuleText = ({ title, body }) => {
	const styles = RuleTextStyles();
	return (
		<>
			<Typography variant="h5" align="left" className={styles.subtitle}>
				{title}
			</Typography>
			<Typography variant="body1" className={styles.spacedApart}>
				<Box fontWeight="light">{body}</Box>
			</Typography>
		</>
	);
};
export default RuleText;
