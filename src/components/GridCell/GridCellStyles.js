import { makeStyles } from '@material-ui/core/styles';

const cell = (isShip, type) => {
	let cellColour = 'darkgrey';

	if (isShip) {
		switch (type) {
			case 'carrier':
				cellColour = 'red';
				break;
			case 'battleship':
				cellColour = 'blue';
				break;
			case 'cruiser':
				cellColour = 'hotpink';
				break;
			case 'submarine':
				cellColour = 'green';
				break;
			case 'destroyer':
				cellColour = 'yellow';
				break;

			default:
				break;
		}
	}

	return {
		width: '40px',
		height: '40px',
		backgroundColor: cellColour,
		border: '2px solid black',
		borderRadius: '50px',

		'&:hover': {
			backgroundColor: cellColour,
			opacity: '0.5',
		},
	};
};

const useStyles = makeStyles(() => ({
	cell: (props) => cell(props.isShip, props.type),
}));

export default useStyles;
