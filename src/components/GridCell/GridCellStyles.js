import { makeStyles } from '@material-ui/core/styles';

const cell = (isShip, type) => {
	let cellColour = 'lightgrey';

	if (isShip) {
		switch (type) {
			case 'carrier':
				cellColour = 'red';
				break;
			case 'battleship':
				cellColour = 'lightgreen';
				break;
			case 'cruiser':
				cellColour = 'hotpink';
				break;
			case 'submarine':
				cellColour = 'cyan';
				break;
			case 'destroyer':
				cellColour = 'yellow';
				break;

			default:
				break;
		}
	}

	return {
		width: '30px',
		height: '30px',
		backgroundColor: cellColour,
		border: '1px solid black',

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
