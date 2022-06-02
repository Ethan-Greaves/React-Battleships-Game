import { makeStyles } from '@material-ui/core/styles';

const width = 16;
const height = 4;
const borderSize = 5;

const useStyles = makeStyles((theme) => ({
	btn: {
		color: 'white',
		background: 'rgb(255,102,51)',
		background: 'linear-gradient(0deg, rgba(255,102,51,1) 0%, rgba(255,153,51,1) 50%, rgba(255,218,51,1) 100%)',
		display: 'inline-block',
		textAlign: 'center',
		borderRadius: theme.shape.borderRadius,
		'&:hover': {
			backgroundColor: '#ff6633',
		},
	},

	btnLarge: {
		border: `${borderSize}px solid ${theme.palette.secondary.main}`,
		width: `${width}rem`,
		height: `${height}rem`,
	},

	btnMedium: {
		border: `${borderSize / 1.2}px solid ${theme.palette.secondary.main}`,
		width: `${width / 1.5}rem`,
		height: `${height}rem`,
	},

	btnSmall: {
		border: `${borderSize / 1.5}px solid ${theme.palette.secondary.main}`,
		width: `${width / 4}rem`,
		height: `${height / 1.1}rem`,
	},
}));

export default useStyles;
