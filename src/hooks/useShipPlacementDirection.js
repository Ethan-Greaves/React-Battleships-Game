import React, { useRef, useState } from 'react';

const UseShipPlacementDirection = (startingDirection) => {
	const [placementDirection, setPlacementDirection] = useState(startingDirection);

	/**
	 * Changes the placement direction of a ship based on what key is pressed
	 * @param {object} event Represents the event being fired for when a key is pressed down
	 */
	const changePlacementDirectionClick = () => {
		if (placementDirection === 'vertical') setPlacementDirection('horizontal');
		else setPlacementDirection('vertical');
	};

	return [placementDirection, changePlacementDirectionClick];
};

export default UseShipPlacementDirection;
