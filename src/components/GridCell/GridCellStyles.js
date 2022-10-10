import { makeStyles } from '@material-ui/core/styles';

const cell = () => {
	const cellSize = '30px';

	return {
		width: cellSize,
		height: cellSize,
		backgroundColor: 'skyBlue',
		border: '3px solid black',
		borderRadius: '5px',
		'&:hover': {
			backgroundColor: 'skyBlue',
		},
	};
};

const useStyles = makeStyles(() => ({
	cell: () => cell(),
}));

export default useStyles;
