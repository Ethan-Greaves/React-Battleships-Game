import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import ShipBottomCell from '../ShipBottomCell/ShipBottomCell';
import ShipMiddleCell from '../ShipMiddleCell/ShipMiddleCell';
import ShipTopCell from '../ShipTopCell/ShipTopCell';
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
	placementDirection,
	isShipTop,
	isShipMiddle,
	isShipBottom,
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

	const determineCell = () => {
		let cell = <WaterCell isHit={isHit} isBattleship={isBattleShip} isPreviewing={isPreviewing} />;
		if (!computerBoardCell) {
			cell = checkShipType(cell);
		} else {
			if (isDestroyed) cell = checkShipType(cell);
		}

		return cell;
	};

	const checkShipType = (cell) => {
		if (isBattleShip && isShipBottom)
			cell = <ShipBottomCell isHit={isHit} isDestroyed={isDestroyed} orientation={placementDirection} />;
		if (isBattleShip && isShipMiddle)
			cell = <ShipMiddleCell isHit={isHit} isDestroyed={isDestroyed} orientation={placementDirection} />;
		if (isBattleShip && isShipTop)
			cell = <ShipTopCell isHit={isHit} isDestroyed={isDestroyed} orientation={placementDirection} isPlaced={true} />;

		return cell;
	};

	return (
		<Grid container>
			<div onClick={handleClick} onMouseOver={handleHover} onMouseLeave={handleHoverExit} className={styles.cell}>
				{determineCell()}
			</div>
		</Grid>
	);
};

export default GridCell;
