import React, { useContext } from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import YourShips from '../../components/YourShips/YourShips';
import SetupBoard from '../../components/SetupBoard/SetupBoard';
import TitleCard from '../../components/TitleCard/TitleCard';
import generalStyles from '../../generalCSS/generalStyle';
import useShipPlacementDirection from '../../hooks/useShipPlacementDirection';
import { settingsContext } from '../../context/settings.context';
import useBoardCreator from '../../hooks/useBoardCreator';
import UseShipPlacer from '../../hooks/useShipPlacer';
import useShipPlacementQueue from '../../hooks/useShipPlacementQueue';
import useShipPreview from '../../hooks/useShipPreview';
import SetupBoardButtons from '../../components/SetupBoardButtons/SetupBoardButtons';
import useEventBus from '../../hooks/useEventBus';

const BoardSetup = () => {
	const generalStyle = generalStyles();
	const { boardSize } = useContext(settingsContext);
	const [board, setBoard, resetBoard] = useBoardCreator(boardSize.rows || 10, boardSize.cols || 10);
	const [placementDirection, changePlacementDirectionClick] = useShipPlacementDirection('horizontal');
	const { placeShip, placeShipsRandomly } = UseShipPlacer(board, boardSize.rows, boardSize.cols);
	const [shipPlacementQueue, setShipPlacementQueue, defaultShipPlacementQueue] = useShipPlacementQueue(placeShip);
	const { showPreview, removePreview } = useShipPreview(board, boardSize.rows, boardSize.cols);

	const handleResetBoard = () => {
		resetBoard();
		setShipPlacementQueue(defaultShipPlacementQueue);
		useEventBus.dispatch('boardReset', { message: 'board has been reset' });
	};

	const randomiseBoard = () => {
		handleResetBoard();
		placeShipsRandomly(defaultShipPlacementQueue, setShipPlacementQueue);
		useEventBus.dispatch('boardRandomized', { message: 'board has been randomized' });
	};

	return (
		<Container maxWidth="md">
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				justify="center"
				style={{ minHeight: '90vh' }}>
				<Grid item>
					<TitleCard isHomePage={false} />
					<Typography
						variant="h4"
						align="center"
						className={generalStyle.transparentBackground}
						style={{ marginBottom: '30px' }}>
						Place Your Ships
					</Typography>
				</Grid>

				<Grid container spacing={3} direction="row" alignItems="center" justifyContent="center" justify="center">
					<Grid item>
						<Grid container direction="column">
							<Grid item>
								<YourShips />
							</Grid>
							<Grid item>
								<SetupBoardButtons
									randomiseBoard={randomiseBoard}
									handleResetBoard={handleResetBoard}
									changePlacementDirectionClick={changePlacementDirectionClick}
								/>
							</Grid>
						</Grid>
					</Grid>

					<Grid item>
						<SetupBoard
							board={board}
							setBoard={setBoard}
							placementDirection={placementDirection}
							shipPlacementQueue={shipPlacementQueue}
							setShipPlacementQueue={setShipPlacementQueue}
							showPreview={showPreview}
							removePreview={removePreview}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};
export default BoardSetup;
