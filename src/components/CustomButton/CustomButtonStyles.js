import { makeStyles } from '@material-ui/core/styles';

// const btn = (theme) => {
// 	return {};
// };

const useStyles = makeStyles((theme) => ({
	btn: {
		border: `5px solid yellow`,
		color: 'white',
		// backgroundColor: '#ff6633',
		background: 'rgb(255,102,51)',
		background: 'linear-gradient(0deg, rgba(255,102,51,1) 0%, rgba(255,153,51,1) 50%, rgba(255,218,51,1) 100%)',
		width: '16rem',
		height: '4rem',
		display: 'inline-block',
		textAlign: 'center',
		borderRadius: '10px',
		'&:hover': {
			backgroundColor: '#ff6633',
		},
	},
}));

export default useStyles;
