import YourShip from '../YourShip/YourShip';
import React, { useState, useEffect, useCallback } from 'react';
import useEventBus from '../../hooks/useEventBus';
import { Typography } from '@material-ui/core';


const YourShips = () => {
    const shipArr = [
        { name: 'Carrier', size: 5, isBeingPlaced: true },
        { name: 'Battleship', size: 4, isBeingPlaced: false },
        { name: 'Cruiser', size: 3, isBeingPlaced: false },
        { name: 'Submarine', size: 3, isBeingPlaced: false },
        { name: 'Destroyer', size: 2, isBeingPlaced: false },
    ];
    const [newShips, setNewShips] = useState(shipArr);
    const [allShipsPlaced, setAllShipsPlaced] = useState(false);

    const removeShip = useCallback(() => {
        const updatedShips = newShips.slice(1);
        if (updatedShips.length > 0) {
            updatedShips[0].isBeingPlaced = true;
        }
        else setAllShipsPlaced(true);
        setNewShips(updatedShips);
    }, [newShips])

    const removeAllShips = useCallback(() => {
        const updatedShips = newShips.slice(newShips.length);
        setNewShips(updatedShips);
        setAllShipsPlaced(true);
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
            setAllShipsPlaced(false);
            setNewShips(newShipsArr);
        });
    
    }, [removeAllShips, removeShip, shipArr]);

    
    return (
        <div>
            <Typography variant="h5" align="center" gutterBottom >Your Ships</Typography>
            {!allShipsPlaced ? newShips.map(ship => {
                return (
                    <YourShip name={ship.name} size={ship.size} isBeingPlaced={ship.isBeingPlaced}/>
                );
            }) : <Typography variant="h6">Ships are in formation</Typography>}
            
        </div>
    );
};

export default YourShips;


