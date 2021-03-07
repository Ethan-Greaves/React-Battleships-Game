import React, { useState } from 'react';

const UseShipPlacementDirection = (startingDirection) => {
	const [placementDirection, setPlacementDirection] = useState(startingDirection);

	const changePlacementDirection = (e) => {
		if (e.key === 'w' || e.key === 'ArrowUp') setPlacementDirection('up');
		if (e.key === 's' || e.key === 'ArrowDown') setPlacementDirection('down');
		if (e.key === 'd' || e.key === 'ArrowRight') setPlacementDirection('right');
		if (e.key === 'a' || e.key === 'ArrowLeft') setPlacementDirection('left');
	};

	return [placementDirection, changePlacementDirection];
};

export default UseShipPlacementDirection;
