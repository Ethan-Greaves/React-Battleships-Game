import { Container, Grid, Slider, Button, Typography } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import TitleCard from '../../components/TitleCard/TitleCard';
import { cpuDifficultyValues, boardSizes } from '../../misc/settingsValues';
import { settingsContext } from '../../context/settings.context';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const sliderTrackHeight = 16;
const ThumbSize = sliderTrackHeight * 2;

const useStyles = makeStyles((theme) => ({
	root: {
		width: 3000 + theme.spacing(3) * 2,
		margin: theme.spacing(3),
	},
	margin: {
		height: theme.spacing(3),
	},

	mark: {
		color: 'white',
		marginTop: theme.spacing(3),
		fontSize: theme.typography.body1.fontSize,
	},

	settingsTitle: {
		color: 'white',
	},
}));

const CustomSlider = withStyles((theme) => ({
	root: {
		color: theme.palette.primary.main,
		height: 8,
	},
	thumb: {
		height: ThumbSize,
		width: ThumbSize,
		backgroundColor: theme.palette.primary.main,
		border: `4px solid ${theme.palette.secondary.main}`,
		marginTop: -8,
		marginLeft: -12,
		'&:focus,&:hover,&$active': {
			boxShadow: 'inherit',
		},
	},

	active: {},
	track: {
		height: sliderTrackHeight,
		borderRadius: theme.shape.borderRadius,
	},
	rail: {
		height: sliderTrackHeight,
		borderRadius: theme.shape.borderRadius,
		opacity: 1,
	},
}))(Slider);

const Settings = () => {
	const { boardSizeVal, setBoardSizeVal } = useContext(settingsContext);
	const { aiDifficulty, setAiDifficulty } = useContext(settingsContext);
	const styles = useStyles();

	return (
		<Container>
			<TitleCard isHomePage={false} />
			<Grid container justify={'center'} direction="column" alignItems="center" spacing={3}>
				<div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '10px' }}>
					<Grid item>
						<div style={{ width: 500, margin: 60 }} className={styles.root}>
							<Typography align="center" variant="h5" className={styles.settingsTitle}>
								AI Difficulty
							</Typography>
							<CustomSlider
								step={null}
								size="medium"
								min={0}
								max={cpuDifficultyValues.length - 1}
								value={aiDifficulty}
								onChange={(e, data) => setAiDifficulty(data)}
								marks={cpuDifficultyValues}
								classes={{ markLabel: styles.mark }}
							/>
						</div>
					</Grid>
					<Grid item>
						<div style={{ width: 500, margin: 60 }}>
							<Typography align="center" variant="h5" className={styles.settingsTitle}>
								Board Size
							</Typography>
							<CustomSlider
								step={null}
								min={0}
								max={2}
								value={boardSizeVal}
								onChange={(e, data) => setBoardSizeVal(data)}
								marks={boardSizes}
								classes={{ markLabel: styles.mark }}
							/>
						</div>
					</Grid>
				</div>

				<Grid item>
					<Link to="/">
						<div style={{ marginTop: '50px' }}>
							<CustomButton text={'Confirm'} />
						</div>
					</Link>
				</Grid>
			</Grid>
		</Container>
	);
};
export default Settings;
