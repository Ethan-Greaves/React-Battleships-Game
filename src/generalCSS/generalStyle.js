import { makeStyles } from '@material-ui/core/styles';
const size = '30px';

const transparentBackground = (transparentBgPadding, theme) => {
	return {
		backgroundColor: 'rgba(0,0,0,0.3)',
		padding: transparentBgPadding || '15px',
		borderRadius: theme.shape.borderRadius,
		color: "white",
	};
};

const useStyles = makeStyles((theme) => ({
	cellSize: {
		width: size,
		height: size,
	},

	boardBackground: {
		backgroundColor: 'black',
		padding: '15px',
		border: '8px dashed #666666',
	},

	transparentBackground: (props) => transparentBackground(props.transparentBgPadding, theme),
}));

export default useStyles;
