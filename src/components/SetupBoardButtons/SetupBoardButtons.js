import { Button, Grid, Tooltip } from '@material-ui/core';
import CustomButton from '../CustomButton/CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice, faRotate, faBackward } from '@fortawesome/free-solid-svg-icons';
import setupBoardButtonsStyles from './SetupBoardButtonsStyles';

const SetupBoardButtons = ({ randomiseBoard, handleResetBoard, changePlacementDirectionClick }) => {
	const styles = setupBoardButtonsStyles();
	return (
		<Grid container justify="center" spacing={2} className={styles.buttonGrid}>
			<Grid item>
				<CustomButton
					text={<FontAwesomeIcon icon={faDice} size="xs" />}
					size="small"
					tooltipText="Randomise"
					onClick={randomiseBoard}
				/>
			</Grid>
			<Grid item>
				<CustomButton
					text={<FontAwesomeIcon icon={faBackward} size="xs" />}
					size="small"
					tooltipText="Reset Ships"
					onClick={handleResetBoard}
				/>
			</Grid>
			<Grid item>
				<CustomButton
					text={<FontAwesomeIcon icon={faRotate} size="xs" />}
					size="small"
					tooltipText="Rotate Ship"
					onClick={changePlacementDirectionClick}
				/>
			</Grid>
		</Grid>
	);
};
export default SetupBoardButtons;
