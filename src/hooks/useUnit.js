import React, { useState, useContext } from 'react';
import UseBoardScanner from './useBoardScanner';
import { settingsContext } from '../context/settings.context';

/**Hook used for units or entities in the game session
 * contains data regarding hits taken and if any/all ships are destroyed
 */
const UseUnit = (name, boardData, setBoard) => {
	const { totalShips } = useContext(settingsContext);
	const { getCellCoordsOfType } = UseBoardScanner(boardData, boardData.length, boardData.length);

	const [destroyerData, setDestroyerData] = useState({
		name: 'destroyer',
		hitCount: 0,
		maxHitCount: 2,
		isDestroyed: false,
	});
	const [submarineData, setSubmarineData] = useState({
		name: 'submarine',
		hitCount: 0,
		maxHitCount: 3,
		isDestroyed: false,
	});
	const [cruiserData, setCruiserData] = useState({
		name: 'cruiser',
		hitCount: 0,
		maxHitCount: 3,
		isDestroyed: false,
	});
	const [battleshipData, setBattleshipData] = useState({
		name: 'battleship',
		hitCount: 0,
		maxHitCount: 4,
		isDestroyed: false,
	});
	const [carrierData, setCarrierData] = useState({
		name: 'carrier',
		hitCount: 0,
		maxHitCount: 5,
		isDestroyed: false,
	});

	const shipsData = [destroyerData, submarineData, cruiserData, battleshipData, carrierData];

	const shipArr = [];

	for (let i = 0; i <= totalShips; i++) {
		shipArr.unshift(shipsData[i]);
	}

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

	const isShipDestroyed = (x, y) => {
		const type = boardData[x][y].type;
		const typeArr = getCellCoordsOfType(type);
		const newBoard = boardData;
		for (let i = 0; i < typeArr.length; i++) {
			if (!newBoard[typeArr[i].x][typeArr[i].y].isHit) return;
		}
		for (let i = 0; i < typeArr.length; i++) {
			newBoard[typeArr[i].x][typeArr[i].y].isDestroyed = true;
		}
		setBoard([...newBoard]);
	};

	const isAllShipsDestroyed = () => {
		for (let i = 0; i < shipArr.length; i++) {
			if (shipsData[i].hitCount !== shipsData[i].maxHitCount) return false;
		}
		return true;
	};

	return { registerHitTaken, isShipDestroyed, isAllShipsDestroyed };
};
export default UseUnit;
