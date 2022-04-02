import { makeStyles } from '@material-ui/core/styles';

const btn = () => {
	return {
		border: '3px solid yellow',
		width: '12rem',
		height: '2.5rem',
		display: 'inline-block',
		textAlign: 'center',
	};
};

const useStyles = makeStyles(() => ({
	btn: () => btn(),
}));

export default useStyles;
