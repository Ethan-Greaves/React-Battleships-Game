import { makeStyles } from '@material-ui/core/styles';
const size = '15px';
const useStyles = makeStyles((theme) => ({
	cell: {
		width: size,
		height: size,
		color: 'red',
		backgroundColor: 'gold',
		border: '1px solid yellow',
	},

	background: {
		backgroundColor: 'lightGrey',
	},

	startGame: {
		backgroundColor: '#a30d0d',
		padding: '15px 40px',
		'&:hover': {
			backgroundColor: '#a30d0d',
		},
	},
}));

export default useStyles;
