import { faPlay, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, Typography, Box, Tooltip } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const GameStateInfo = ({ stateDialogue, gameState }) => {
	const theme = useTheme();

	return gameState !== 'won' && gameState !== 'lost' ? (
		<div style={{ border: '5px solid black', marginBottom: '30px', padding: '15px', backgroundColor: 'white' }}>
			<Typography align="center" variant="h5">
				{stateDialogue.toUpperCase()}
			</Typography>
		</div>
	) : (
		<div style={{ border: '5px solid black', marginBottom: '30px', padding: '15px', backgroundColor: 'white' }}>
			<Typography align="center" variant="h5" sx={{ fontWeight: 'bold' }}>
				GAME OVER!
			</Typography>
			<Typography align="center" variant="body2" style={{ marginBottom: theme.spacing(1.5) }}>
				<Box fontWeight="bold">{stateDialogue.toUpperCase()}</Box>
			</Typography>

			<Grid container justify="center" spacing={1}>
				<Grid item>
					<Tooltip title="Play Again?">
						<Link to="/setupBoard">
							<Button variant="contained" color="primary" style={{ padding: theme.spacing(1) }}>
								<FontAwesomeIcon icon={faPlay} />
							</Button>
						</Link>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title="Main Menu">
						<Link to="/">
							<Button variant="contained" color="primary" style={{ padding: theme.spacing(1) }}>
								<FontAwesomeIcon icon={faHome} />
							</Button>
						</Link>
					</Tooltip>
				</Grid>
			</Grid>
		</div>
	);
};
export default GameStateInfo;
