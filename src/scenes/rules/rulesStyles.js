import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	background: {
		backgroundColor: 'rgba(0,0,0,0.3)',
		padding: '35px',
		borderRadius: theme.shape.borderRadius,
		color: 'white',
	},
}));

export default useStyles;
