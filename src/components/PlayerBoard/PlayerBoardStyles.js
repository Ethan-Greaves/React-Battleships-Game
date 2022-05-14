import { makeStyles } from '@material-ui/core/styles';
import cancel from '../../assets/Battleship/PNG/Cancel.png';
import window from '../../assets/Battleship/PNG/window.png';
const useStyles = makeStyles((theme) => ({
	boardOuterMargin: {
		backgroundColor: 'black',
		padding: '15px',
		border: "8px dashed   #666666"
	},

	board: {
		cursor: `url(${cancel}) 20 20, auto;`,
	},
}));

export default useStyles;
