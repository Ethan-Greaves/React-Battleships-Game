import React, { useState } from 'react';

const UseShipPlacementDirection = (startingDirection) => {
	const [placementDirection, setPlacementDirection] = useState(startingDirection);

	const changePlacementDirection = (event) => {
		if (event.key === 'w' || event.key === 'ArrowUp') setPlacementDirection('up');
		if (event.key === 's' || event.key === 'ArrowDown') setPlacementDirection('down');
		if (event.key === 'd' || event.key === 'ArrowRight') setPlacementDirection('right');
		if (event.key === 'a' || event.key === 'ArrowLeft') setPlacementDirection('left');
	};

	return [placementDirection, changePlacementDirection];
};

export default UseShipPlacementDirection;
