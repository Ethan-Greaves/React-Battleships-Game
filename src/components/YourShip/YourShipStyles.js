import { makeStyles } from '@material-ui/core/styles';
import YourShip from './YourShip';

const square = () => {
	const size = '15px';
	return {
		width: size,
		height: size,
		backgroundColor: 'gold',
		border: '1px solid yellow',
	};
};

const btn = (isBeingPlaced) => {
	let bgColor = 'blue';
	if (isBeingPlaced) bgColor = 'lightgrey';

	return {
		backgroundColor: `${bgColor} !important`,
		width: '250px',
		justifyContent: 'flex-start',
		border: '2px solid yellow',
		borderRadius: '0',
	};
};

const name = () => {
	return {
		color: 'white',
		textAlign: `left !important`,
	};
};

const useStyles = makeStyles(() => ({
	square: () => square(),
	name: () => name(),
	btn: (props) => btn(props.isBeingPlaced),
}));

export default useStyles;
