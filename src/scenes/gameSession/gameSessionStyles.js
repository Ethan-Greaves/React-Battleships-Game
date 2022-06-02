import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	boardLabel: {
		color: 'white',
		border: `4px solid ${theme.palette.secondary.main}`,
		background: 'rgb(255,102,51)',
		background: 'linear-gradient(0deg, rgba(255,102,51,1) 0%, rgba(255,153,51,1) 50%, rgba(255,218,51,1) 100%)',
		borderRadius: theme.shape.borderRadius,
	},
}));

export default useStyles;
