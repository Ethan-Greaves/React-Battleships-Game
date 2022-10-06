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
		color: 'white !important',
		marginTop: theme.spacing(3),
		fontSize: theme.typography.body1.fontSize,
	},

	settingsTitle: {
		color: 'white !important',
	},

	checkbox: {
		color: theme.palette.primary.main,
		'&.Mui-checked': {
			color: theme.palette.primary.main,
		},
	},

	checkboxLabel: {
		pointerEvents: 'none',
	},
}));

export default useStyles;
