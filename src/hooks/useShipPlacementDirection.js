import React, { useState } from 'react';

const UseShipPlacementDirection = (startingDirection) => {
	const [placementDirection, setPlacementDirection] = useState(startingDirection);

	/**
	 * Changes the placement direction of a ship based on what key is pressed
	 * @param {object} event Represents the event being fired for when a key is pressed down
	 */
	//TODO Change this to right click
	const changePlacementDirection = (event) => {
		if (event.key === 'w' || event.key === 'ArrowUp') setPlacementDirection('vertical');
		if (event.key === 's' || event.key === 'ArrowDown') setPlacementDirection('vertical');
		if (event.key === 'd' || event.key === 'ArrowRight') setPlacementDirection('horizontal');
		if (event.key === 'a' || event.key === 'ArrowLeft') setPlacementDirection('horizontal');
	};

	const changePlacementDirectionClick = () => {
		if (placementDirection === 'vertical') setPlacementDirection('horizontal');
		else setPlacementDirection('vertical');
	};

	return [placementDirection, changePlacementDirection, changePlacementDirectionClick];
};

export default UseShipPlacementDirection;
