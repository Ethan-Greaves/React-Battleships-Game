import YourShip from '../YourShip/YourShip';
import React, { useState, useEffect, useCallback } from 'react';
import useEventBus from '../../hooks/useEventBus';


const YourShips = () => {
    const shipArr = [
        { name: 'Carrier', size: 5, isBeingPlaced: true },
        { name: 'Battleship', size: 4, isBeingPlaced: false },
        { name: 'Cruiser', size: 3, isBeingPlaced: false },
        { name: 'Submarine', size: 3, isBeingPlaced: false },
        { name: 'Destroyer', size: 2, isBeingPlaced: false },
    ];
    const [newShips, setNewShips] = useState(shipArr);

    const removeShip = useCallback(() => {
        const updatedShips = newShips.slice(1);
        if (updatedShips.length > 0) {
            updatedShips[0].isBeingPlaced = true;
        }
        setNewShips(updatedShips);
    }, [newShips])

    const removeAllShips = useCallback(() => {
        const updatedShips = newShips.slice(newShips.length);
        setNewShips(updatedShips);
    }, [newShips])

    useEffect(() => {
        useEventBus.on(`shipPlaced`, (data) => {
            removeShip();
        });
            
        useEventBus.on(`boardRandomized`, (data) => {
            removeAllShips();
        });
            
        useEventBus.on(`boardReset`, (data) => {
            const newShipsArr = shipArr;
            setNewShips(newShipsArr);
        });
    
    }, [removeAllShips, removeShip, shipArr]);

    
    return (
        <div>
            <h3>Your Ships</h3>
            {newShips.map(ship => {
                return (
                    <YourShip name={ship.name} size={ship.size} isBeingPlaced={ship.isBeingPlaced}/>
                );
            })}
        </div>
    );
};

export default YourShips;


