import { makeStyles } from '@material-ui/core/styles';
import YourShip from './YourShip';

const square = (theme) => {
	const size = '20px';
	return {
		width: size,
		height: size,
		backgroundColor: theme.palette.primary.main,
		border: `1px solid ${theme.palette.secondary.main}`,
		borderRadius: "3px",
	};
};

const btn = (isBeingPlaced, theme) => {
	return {
		width: '300px',
		justifyContent: 'flex-start',
		height: '30px',
	};
};

const name = () => {
	return {
		color: 'white',
		textAlign: `left !important`,
	};
};

const useStyles = makeStyles((theme) => ({
	square: () => square(theme),
	name: () => name(),
	btn: (props) => btn(props.isBeingPlaced, theme),
}));

export default useStyles;
