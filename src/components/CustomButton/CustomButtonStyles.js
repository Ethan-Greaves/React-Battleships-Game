import { makeStyles } from '@material-ui/core/styles';

// const btn = (theme) => {
// 	return {};
// };

const useStyles = makeStyles((theme) => ({
	btn: {
		border: `3px solid ${theme.palette.primary.main}`,
		color: theme.palette.primary.main,
		width: '12rem',
		height: '2.5rem',
		display: 'inline-block',
		textAlign: 'center',
	},
}));

export default useStyles;
