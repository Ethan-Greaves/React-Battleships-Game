import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import ShipBottomCell from '../ShipBottomCell/ShipBottomCell';
import WaterCell from '../WaterCell/WaterCell';
import GridCellStyles from './GridCellStyles';

const GridCell = ({
	coords,
	isBattleShip,
	isPreviewing,
	isUnplaceable,
	isHit,
	clickFunction,
	hoverFunction,
	hoverExitFunction,
	computerBoardCell,
	type,
	isDestroyed,
}) => {
	const styles = GridCellStyles({
		isBattleShip,
		type,
		isPreviewing,
		isUnplaceable,
		isHit,
		computerBoardCell,
		isDestroyed,
	});

	const handleClick = () => {
		if (!null) return clickFunction(coords, isBattleShip, type);
		return null;
	};

	const handleHover = () => {
		return hoverFunction(coords);
	};

	const handleHoverExit = () => {
		return hoverExitFunction(coords);
	};

	let cell = <WaterCell isHit={isHit} isBattleship={isBattleShip} />;
	if (!computerBoardCell) if (isBattleShip) cell = <ShipBottomCell isHit={isHit} isDestroyed={isDestroyed} />;

	return (
		<>
			{/* {coords.x === 0 && <p>{String.fromCharCode(65 + coords.y)}</p>} */}
			{/* {coords.y === 0 ? ( */}
			<>
				<Grid container>
					{/* <p style={{ margin: 0 }}>{coords.x}</p> */}
					{/* <Box ml={2}></Box> */}
					<div onClick={handleClick} onMouseOver={handleHover} onMouseLeave={handleHoverExit} className={styles.cell}>
						{cell}
					</div>
				</Grid>
			</>
			{/* ) : ( */}
			{/* <div
					onClick={handleClick}
					className={styles.cell}
					onMouseLeave={handleHoverExit}
					onMouseOver={handleHover}></div> */}
			{/* ) */}
		</>
	);
};

export default GridCell;
