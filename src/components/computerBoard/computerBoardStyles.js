import { makeStyles } from '@material-ui/core/styles';
import customCrosshair from '../../assets/Battleship/PNG/aim.png';
const useStyles = makeStyles((theme) => ({
	board: {
		cursor: `url(${customCrosshair}) 20 20, auto;`,
		backgroundColor: 'black',
		padding: '15px',
		border: '8px dashed #666666',
	},

	buttonGrid: {
		marginTop: '1em',
	},

	boardOuterMargin: {},
}));

export default useStyles;
