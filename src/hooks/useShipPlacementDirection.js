import React, { useState } from 'react';

const UseShipPlacementDirection = (startingDirection) => {
	const [placementDirection, setPlacementDirection] = useState(startingDirection);

	const changePlacementDirection = (event) => {
		if (event.key === 'w' || event.key === 'ArrowUp') setPlacementDirection('vertical');
		if (event.key === 's' || event.key === 'ArrowDown') setPlacementDirection('vertical');
		if (event.key === 'd' || event.key === 'ArrowRight') setPlacementDirection('horizontal');
		if (event.key === 'a' || event.key === 'ArrowLeft') setPlacementDirection('horizontal');
	};

	return [placementDirection, changePlacementDirection];
};

export default UseShipPlacementDirection;
