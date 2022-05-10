import React, { useState } from 'react';

/**Hook used for units or entities in the game session
 * contains data regarding hits taken and if any/all ships are destroyed
 */
const UseUnit = (name, boardData) => {
    const [destroyerData, setDestroyerData] = useState({
        name: "destroyer",
		hitCount: 0,
		maxHitCount: 2,
		isDestroyed: false,
	});
    const [submarineData, setSubmarineData] = useState({
        name: "submarine",
		hitCount: 0,
		maxHitCount: 3,
		isDestroyed: false,
	});
    const [cruiserData, setCruiserData] = useState({
        name: "cruiser",
		hitCount: 0,
		maxHitCount: 3,
		isDestroyed: false,
	});
    const [battleshipData, setBattleshipData] = useState({
        name: "battleship",
		hitCount: 0,
		maxHitCount: 4,
		isDestroyed: false,
	});
    const [carrierData, setCarrierData] = useState({
        name: "carrier",
		hitCount: 0,
		maxHitCount: 5,
		isDestroyed: false,
    });
    
    const shipsData = [destroyerData, submarineData, cruiserData, battleshipData, carrierData];

	const registerHitTaken = (x, y) => {
		if (!boardData[x][y].isBattleShip) return;

		switch (boardData[x][y].type) {
			case 'destroyer':
				setDestroyerData((prevDestroyerData) => ({
					...prevDestroyerData,
					hitCount: prevDestroyerData.hitCount + 1,
				}));
				break;
			case 'submarine':
				setSubmarineData((prevSubmarineData) => ({
					...prevSubmarineData,
					hitCount: prevSubmarineData.hitCount + 1,
				}));
				break;
			case 'cruiser':
				setCruiserData((prevCruiserData) => ({
					...prevCruiserData,
					hitCount: prevCruiserData.hitCount + 1,
				}));
				break;
			case 'battleship':
				setBattleshipData((prevBattleshipData) => ({
					...prevBattleshipData,
					hitCount: prevBattleshipData.hitCount + 1,
				}));
				break;
			case 'carrier':
				setCarrierData((prevCarrierData) => ({
					...prevCarrierData,
					hitCount: prevCarrierData.hitCount + 1,
				}));
				break;
			default:
				break;
		}
    };
    
    const isShipDestroyed = (type) => {
        for (let i = 0; i < shipsData.length; i++) {
            if (shipsData[i].name === type && shipsData[i].hitCount === shipsData[i].maxHitCount) return true;
        }
        return false;
    }

	return { registerHitTaken, isShipDestroyed };
};
export default UseUnit;
