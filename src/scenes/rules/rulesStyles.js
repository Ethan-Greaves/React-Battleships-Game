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

	background: {
		backgroundColor: 'rgba(0,0,0,0.3)',
		padding: '35px',
		borderRadius: theme.shape.borderRadius,
		color: 'white',
	},
}));

export default useStyles;
