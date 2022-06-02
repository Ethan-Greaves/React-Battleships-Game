import { makeStyles } from '@material-ui/core/styles';
import customCrosshair from '../../assets/Battleship/PNG/aim.png';
const useStyles = makeStyles((theme) => ({
	board: {
		cursor: `url(${customCrosshair}) 20 20, auto;`,
	},

	buttonGrid: {
		marginTop: '1em',
	},

	boardOuterMargin: {},
}));

export default useStyles;
