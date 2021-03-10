import React from 'react';
import './GridCell.css';
import GridCellStyles from './GridCellStyles';

const GridCell = ({ coords, isBattleShip, placeBattleShip, type }) => {
	const styles = GridCellStyles({
		isShip: isBattleShip,
		type,
	});
	const handleClick = () => {
		placeBattleShip(coords);
	};

	return <div onClick={handleClick} className={styles.cell}></div>;
};

export default GridCell;
