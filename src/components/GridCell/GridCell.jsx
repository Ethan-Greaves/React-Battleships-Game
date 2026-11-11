import React from 'react';
import { Grid } from '@material-ui/core';
import ShipCell from '../ShipCell/ShipCell';
import GridCellStyles from './GridCellStyles';
import WaterCell from '../WaterCell/WaterCell';

const GridCell = (props) => {
	const styles = GridCellStyles();
	const handleClick = () => (!null ? props.clickFunction(props.coords, props.isBattleShip, props.type) : null);
	const handleHover = () => props.hoverFunction(props.coords);
	const handleHoverExit = () => props.hoverExitFunction(props.coords);

	const determineCell = () => {
		let cell = <WaterCell isHit={props.isHit} isBattleship={props.isBattleShip} isPreviewing={props.isPreviewing} />;
		if (!props.computerBoardCell) cell = checkShipType(cell);
		else if (props.isDestroyed) cell = checkShipType(cell);
		return cell;
	};

	const checkShipType = (cell) => {
		if (props.isBattleShip && props.isShipBottom)
			cell = <ShipCell isHit={props.isHit} isDestroyed={props.isDestroyed} orientation={props.placementDirection} type='bottom' />;
		if (props.isBattleShip && props.isShipMiddle)
			cell = <ShipCell isHit={props.isHit} isDestroyed={props.isDestroyed} orientation={props.placementDirection} type='middle' />;
		if (props.isBattleShip && props.isShipTop)
			cell = <ShipCell isHit={props.isHit} isDestroyed={props.isDestroyed} orientation={props.placementDirection} type='top' />;
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
