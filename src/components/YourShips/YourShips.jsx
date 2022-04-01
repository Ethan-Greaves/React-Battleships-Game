import PropTypes from 'prop-types'; // ES6
import YourShip from '../YourShip/YourShip';
import React, { useState } from 'react';



const YourShips = ({ ships }) => {
    const [newShips, setNewShips] = useState(ships);

    const removeShip = () => {
        const updatedShips = newShips.slice(1);
        if (updatedShips.length > 0) {
            updatedShips[0].isBeingPlaced = true;
        }
        setNewShips(updatedShips);
    }

    const resetShips = () => setNewShips(ships);
    
    return (
        <div>
            <h3>Your Ships</h3>
            {newShips.map(ship => {
                return (
                    <YourShip name={ship.name} size={ship.size} isBeingPlaced={ship.isBeingPlaced}/>
                );
            })}
            <button onClick={removeShip}>remove ship</button>
        </div>
    );
};
export default YourShips;

YourShips.propTypes = {
    ships: PropTypes.arrayOf(PropTypes.object),
}
