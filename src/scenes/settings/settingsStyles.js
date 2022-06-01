import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 3000 + theme.spacing(3) * 2,
		margin: theme.spacing(3),
	},
	margin: {
		height: theme.spacing(3),
	},

	mark: {
		color: 'white',
		marginTop: theme.spacing(3),
		fontSize: theme.typography.body1.fontSize,
	},

	background: {
		backgroundColor: 'rgba(0,0,0,0.3)',
		padding: '15px',
		borderRadius: '10px',
	},

	settingsTitle: {
		color: 'white',
	},
}));

export default useStyles;
