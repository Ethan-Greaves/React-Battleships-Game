import React from 'react';
import useToggle from '../../hooks/useToggle';
import './GridCell.css';

const GridCell = ({ coord, isBattleShip, placeBattleShip }) => {
	const handleClick = () => {
		placeBattleShip(coord);
	};

	return (
		<div
			onClick={handleClick}
			className={isBattleShip ? 'battleship-cell' : 'empty-cell'}
		></div>
	);
};

export default GridCell;
