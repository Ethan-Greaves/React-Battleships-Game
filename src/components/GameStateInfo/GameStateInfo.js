import { faPlay, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, Typography, Box, Tooltip } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';
import generalStyles from '../../generalCSS/generalStyle';

const GameStateInfo = (props) => {
	const theme = useTheme();
	const generalStyle = generalStyles();

	return props.gameState !== 'won' && props.gameState !== 'lost' ? (
		<div className={generalStyle.transparentBackground} style={{ marginBottom: '30px' }}>
			<Typography align='center' variant='h4'>
				{props.stateDialogue.toUpperCase()}
			</Typography>
		</div>
	) : (
		<div className={generalStyle.transparentBackground} style={{ marginBottom: '30px' }}>
			<Typography align='center' variant='h4' sx={{ fontWeight: 'bold' }}>
				GAME OVER
			</Typography>
			<Typography align='center' variant='h5' style={{ marginBottom: theme.spacing(1.5) }}>
				<Box>{props.stateDialogue.toUpperCase()}</Box>
			</Typography>

			<Grid container justify='center' spacing={1}>
				<Grid item>
					<Tooltip title='Play Again?'>
						<Link to='/setupBoard'>
							<CustomButton text={<FontAwesomeIcon icon={faPlay} size='xs' />} size='small' tooltipText='Play Again?' />
						</Link>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title='Main Menu'>
						<Link to='/'>
							<CustomButton text={<FontAwesomeIcon icon={faHome} size='xs' />} size='small' tooltipText='Main Menu' />
						</Link>
					</Tooltip>
				</Grid>
			</Grid>
		</div>
	);
};
export default GameStateInfo;
