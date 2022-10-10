import React, { useRef } from 'react';

const UseShipPlacementDirection = (startingDirection) => {
	const placementDirection = useRef(startingDirection);

	/**
	 * Changes the placement direction of a ship based on what key is pressed
	 * @param {object} event Represents the event being fired for when a key is pressed down
	 */
	const changePlacementDirectionClick = () => {
		if (placementDirection.current === 'vertical') placementDirection.current = 'horizontal';
		else placementDirection.current = 'vertical';
	};

	return [placementDirection, changePlacementDirectionClick];
};

export default UseShipPlacementDirection;
