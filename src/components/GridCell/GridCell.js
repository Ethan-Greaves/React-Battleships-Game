import { Box, Grid } from '@material-ui/core';
import React from 'react';
import GridCellStyles from './GridCellStyles';

const GridCell = ({ coords, isBattleShip, placeBattleShip, type }) => {
	const styles = GridCellStyles({
		isShip: isBattleShip,
		type,
	});
	const handleClick = () => {
		placeBattleShip(coords);
	};

	return (
		<>
			{coords.x === 0 && <p>{String.fromCharCode(65 + coords.y)}</p>}
			{coords.y === 0 ? (
				<>
					<Grid container>
						<p style={{ margin: 0 }}>{coords.x}</p>
						<Box ml={2}></Box>
						<div onClick={handleClick} className={styles.cell}></div>
					</Grid>
				</>
			) : (
				<div onClick={handleClick} className={styles.cell}></div>
			)}
		</>
	);
};

export default GridCell;
