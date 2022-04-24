import { makeStyles } from '@material-ui/core/styles';

const cell = (isBattleShip, type, isPreviewing, isUnplaceable, isHit, computerBoardCell) => {
	let cellColour = 'lightgrey';
	let cellOpacity = 1;
	let border = '1px solid black';

	if (isHit && isBattleShip) {
		border = '1px solid red';
		cellColour = 'red';
	} else if (isHit && !isBattleShip) {
		cellColour = 'grey';
	}

	if (isBattleShip && !isHit && !computerBoardCell) {
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

	if (!isBattleShip) {
		// cellOpacity = 0.5;

		if (isPreviewing) {
			cellColour = 'SkyBlue';
		}
		if (isUnplaceable) {
			cellColour = 'red';
		}
	}

	return {
		width: '40px',
		height: '40px',
		backgroundColor: cellColour,
		border: border,
		opacity: cellOpacity,

		'&:hover': {
			backgroundColor: cellColour,
			opacity: cellOpacity,
		},
	};
};

const useStyles = makeStyles(() => ({
	cell: (props) =>
		cell(props.isBattleShip, props.type, props.isPreviewing, props.isUnplaceable, props.isHit, props.computerBoardCell),
}));

export default useStyles;
