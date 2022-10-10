import { Container, Grid, Button, Typography, Checkbox, FormControlLabel, Box } from '@material-ui/core';
import React, { useContext } from 'react';
import TitleCard from '../../components/TitleCard/TitleCard';
import { cpuDifficultyValues, boardSizes, totalShipsValues } from '../../misc/settingsValues';
import { settingsContext } from '../../context/settings.context';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import settingsStyles from './settingsStyles';
import CustomSlider from './customSlider';
import generalStyles from '../../generalCSS/generalStyle';

const Settings = () => {
	const { boardSizeVal, setBoardSizeVal } = useContext(settingsContext);
	const { aiDifficulty, setAiDifficulty } = useContext(settingsContext);
	const { totalShips, setTotalShips } = useContext(settingsContext);
	const { disableAnimations, setDisableAnimations } = useContext(settingsContext);

	const styles = settingsStyles();
	const generalStyle = generalStyles({ transparentBgPadding: '15px' });

	console.log(disableAnimations);

	return (
		<Container>
			<TitleCard isHomePage={false} />
			<Grid container justify={'center'} direction='column' alignItems='center' spacing={3}>
				<Grid item className={generalStyle.transparentBackground}>
					<Grid container direction='column' alignItems='center'>
						<Grid item>
							<div style={{ width: 500, margin: 60 }} className={styles.root}>
								<Typography align='center' variant='h5' className={styles.settingsTitle}>
									AI Difficulty
								</Typography>
								<CustomSlider
									step={null}
									size='medium'
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
								<Typography align='center' variant='h5' className={styles.settingsTitle}>
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
						<Grid item>
							<div style={{ width: 500, margin: 60 }}>
								<Typography align='center' variant='h5' className={styles.settingsTitle}>
									Total Ships
								</Typography>
								<CustomSlider
									step={null}
									min={0}
									max={4}
									value={totalShips}
									onChange={(e, data) => setTotalShips(data)}
									marks={totalShipsValues}
									classes={{ markLabel: styles.mark }}
								/>
							</div>
						</Grid>

						<Grid item>
							<FormControlLabel
								control={<Checkbox className={styles.checkbox} checked={disableAnimations} />}
								label={
									<Typography className={styles.checkboxLabel} disabled variant='h6'>
										Disable Animations
									</Typography>
								}
								onChange={() => setDisableAnimations(!disableAnimations)}
							/>
						</Grid>
					</Grid>
				</Grid>

				<Grid item>
					<Link to='/'>
						<div style={{ marginTop: '50px' }}>
							<CustomButton text={'Back'} />
						</div>
					</Link>
				</Grid>
			</Grid>
		</Container>
	);
};
export default Settings;
