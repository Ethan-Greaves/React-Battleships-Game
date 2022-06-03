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

	let cell = <WaterCell isHit={isHit} isBattleship={isBattleShip} isPreviewing={isPreviewing} />;
	if (!computerBoardCell)
		if (isBattleShip) cell = <ShipBottomCell isHit={isHit} isDestroyed={isDestroyed} isPreviewing={isPreviewing} />;
	// if (isPreviewing) cell = <ShipBottomCell isHit={isHit} isDestroyed={isDestroyed} isPreviewing={isPreviewing} />;

	return (
		<Grid container>
			<div onClick={handleClick} onMouseOver={handleHover} onMouseLeave={handleHoverExit} className={styles.cell}>
				{cell}
			</div>
		</Grid>
	);
};

export default GridCell;
