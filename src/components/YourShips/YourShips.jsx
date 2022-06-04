import YourShip from '../YourShip/YourShip';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import useEventBus from '../../hooks/useEventBus';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import generalStyles from '../../generalCSS/generalStyle'
import CustomButton from '../CustomButton/CustomButton';

const YourShips = () => {
    const generalStyle = generalStyles();
    const shipArr = () => [
        { name: 'Carrier', size: 5, isBeingPlaced: true },
        { name: 'Battleship', size: 4, isBeingPlaced: false },
        { name: 'Cruiser', size: 3, isBeingPlaced: false },
        { name: 'Submarine', size: 3, isBeingPlaced: false },
        { name: 'Destroyer', size: 2, isBeingPlaced: false },
    ];
    const [newShips, setNewShips] = useState(shipArr);
    const [allShipsPlaced, setAllShipsPlaced] = useState(false);
    const [board, setBoard] = useState([]);

    const removeShip = useCallback(() => {
        const updatedShips = newShips.slice(1);
        if (updatedShips.length > 0) {
            updatedShips[0].isBeingPlaced = true;
        }
        else setAllShipsPlaced(true);
        setNewShips(updatedShips);
    }, [newShips])

    const removeAllShips = useCallback(() => {
        setAllShipsPlaced(true);
    }, [])

    useEffect(() => {
        useEventBus.on(`shipPlaced`, (data) => {
            removeShip();
            setBoard(data.board);
        });
            
        useEventBus.on(`boardRandomized`, (data) => {
            removeAllShips();
        });

        useEventBus.on(`boardUpdated`, (data) => {
            setBoard(data.board);
        });
            
        useEventBus.on(`boardReset`, (data) => {
            const newShipsArr = shipArr;
            setAllShipsPlaced(false);
            setNewShips(newShipsArr);
        });
    
    }, [removeAllShips, removeShip]);

    return (
        <>
            {!allShipsPlaced ?
                <div className={generalStyle.transparentBackground}>
                    <Typography variant="h5" align="center" gutterBottom >Your Ships</Typography>
                    {newShips.map((ship) => {
                        return (<YourShip name={ship.name} size={ship.size} isBeingPlaced={ship.isBeingPlaced}/>);
                    })}
                </div>
                :
                <div>
                    <Link to={{
                        pathname: "/gameSession",
                        state: { board },
                    }}>
                        <CustomButton text={"Start Game"}/>
                    </Link>
                </div>
            }
        </>
    );
};

export default YourShips;


