import { makeStyles } from '@material-ui/core/styles';

const spacedApart = () => {
	return {
		margin: '20px 0',
	};
};

const subtitle = () => {
	return {
		borderBottom: '2px solid white',
		display: 'inline-block',
		marginBottom: '1em',
	};
};

const useStyles = makeStyles(() => ({
	spacedApart: () => spacedApart(),
	subtitle: () => subtitle(),
}));

export default useStyles;
