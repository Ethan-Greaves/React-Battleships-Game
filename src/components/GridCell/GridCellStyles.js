import { makeStyles } from '@material-ui/core/styles';

const cell = (isShip, type, isPreviewing, isUnplaceable) => {
	let cellColour = 'lightgrey';
	let cellOpacity = 1;

	if (isShip) {
		switch (type) {
			case 'carrier':
				cellColour = 'orange';
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
				cellColour = 'rosybrown';
				break;

			default:
				break;
		}
	}

	if (!isShip) {
		if (isPreviewing) {
			cellColour = 'SkyBlue';
			cellOpacity = 0.5;
		} else if (isUnplaceable) {
			cellOpacity = 0.5;
			cellColour = 'red';
		}
	}

	return {
		width: '40px',
		height: '40px',
		backgroundColor: cellColour,
		border: '1px solid black',
		opacity: cellOpacity,

		'&:hover': {
			backgroundColor: cellColour,
			opacity: cellOpacity,
		},
	};
};

const useStyles = makeStyles(() => ({
	cell: (props) =>
		cell(props.isShip, props.type, props.isPreviewing, props.isUnplaceable),
}));

export default useStyles;
