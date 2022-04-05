import { Container, Grid, Slider, Button } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import TitleCard from '../../components/TitleCard/TitleCard';
import { cpuDifficultyValues, boardSizes } from '../../misc/settingsValues';
import { settingsContext } from '../../context/settings.context';
import { Link } from 'react-router-dom';

const Settings = () => {
	const { boardSizeVal, setBoardSizeVal } = useContext(settingsContext);
	const [cpuDifficultyVal, setCpuDifficultyVal] = useState(0);

	return (
		<Container>
			<TitleCard isHomePage={false} />
			<Grid container justify={'center'} direction="column" alignItems="center">
				<Grid item>
					<div style={{ width: 500, margin: 60 }}>
						<span> AI Difficulty : </span>
						<Slider
							step={null}
							min={0}
							max={3}
							value={cpuDifficultyVal}
							onChange={(e, data) => setCpuDifficultyVal(data)}
							marks={cpuDifficultyValues}
						/>
					</div>
				</Grid>
				<Grid item>
					<div style={{ width: 500, margin: 60 }}>
						<span> Board Size : </span>
						<Slider
							step={null}
							min={0}
							max={2}
							value={boardSizeVal}
							onChange={(e, data) => setBoardSizeVal(data)}
							marks={boardSizes}
						/>
					</div>
				</Grid>
				<Grid item>
					<Link to='/'>
						<Button variant='contained'>Confirm</Button>
					</Link>
				</Grid>
			</Grid>
		</Container>
	);
};
export default Settings;
