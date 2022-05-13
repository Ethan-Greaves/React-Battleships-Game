import { makeStyles } from '@material-ui/core/styles';

const cell = (isBattleShip, type, isPreviewing, isUnplaceable, isHit, computerBoardCell, isShipDestroyed) => {
	let cellColour = 'lightgrey';
	let cellOpacity = 1;
	let border = '3px solid black';
	let cellAnimation = 'shake 50ms 6 alternate backwards';
	const shipNames = ['destroyer', 'submarine', 'cruiser', 'battleship', 'carrier'];
	const cellSize = '55px';

	if (isHit && isBattleShip) {
		// border = '1px solid red';
		cellColour = 'red';
		for (let i = 0; i < shipNames.length; i++) {
			if (isShipDestroyed(shipNames[i]) && type === shipNames[i]) {
				cellColour = '#212529';
				border = '3px solid red';
				cellAnimation = 'shake 50ms 6 alternate backwards';
			}
		}
	} else if (isHit && !isBattleShip) {
		cellColour = 'grey';
	}
	if (isBattleShip && !isHit && !computerBoardCell) {
		cellColour = '#364fc7';
	}

	if (!isBattleShip) {
		if (isPreviewing) {
			cellColour = 'SkyBlue';
		}
		if (isUnplaceable) {
			cellColour = 'red';
		}
	}

	return {
		width: cellSize,
		height: cellSize,
		backgroundColor: cellColour,
		border: border,
		opacity: cellOpacity,
		Animation: cellAnimation,
		borderRadius: "5px",
		'&:hover': {
			backgroundColor: cellColour,
			opacity: cellOpacity,
		},
	};
};

const useStyles = makeStyles(() => ({
	'@keyframes shake': {
		from: {
			transform: 'translate(30%, 17%)',
		},

		to: {
			transform: 'translate(-30%, -17%)',
		},
	},

	cell: (props) =>
		cell(
			props.isBattleShip,
			props.type,
			props.isPreviewing,
			props.isUnplaceable,
			props.isHit,
			props.computerBoardCell,
			props.isShipDestroyed
		),
}));

export default useStyles;
