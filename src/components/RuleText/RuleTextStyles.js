import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	subtitle: {
		borderBottom: `4px solid ${theme.palette.primary.main}`,
		display: 'inline-block',
		marginBottom: '.5em',
	},

	spacedApart: {
		marginBottom: '12px',
	},
}));

export default useStyles;
