import React from 'react';
import useToggle from '../../hooks/useToggle';
import './GridCell.css';

const GridCell = ({ coord, isBattleShip }) => {
	const [IsBattleShip, toggleIsBattleShip] = useToggle(isBattleShip);

	return (
		<div
			onClick={toggleIsBattleShip}
			className={IsBattleShip ? 'battleship-cell' : 'empty-cell'}
		></div>
	);
};

export default GridCell;
