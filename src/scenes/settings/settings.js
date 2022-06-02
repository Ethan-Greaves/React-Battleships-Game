import { Container, Grid, Button, Typography } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import TitleCard from '../../components/TitleCard/TitleCard';
import { cpuDifficultyValues, boardSizes } from '../../misc/settingsValues';
import { settingsContext } from '../../context/settings.context';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import settingsStyles from './settingsStyles';
import CustomSlider from './customSlider';
import generalStyles from '../../generalCSS/generalStyle';

const Settings = () => {
	const { boardSizeVal, setBoardSizeVal } = useContext(settingsContext);
	const { aiDifficulty, setAiDifficulty } = useContext(settingsContext);
	const styles = settingsStyles();
	const generalStyle = generalStyles({ transparentBgPadding: '15px' });
	return (
		<Container>
			<TitleCard isHomePage={false} />
			<Grid container justify={'center'} direction="column" alignItems="center" spacing={3}>
				<div className={generalStyle.transparentBackground}>
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
