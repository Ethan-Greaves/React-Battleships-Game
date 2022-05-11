import { useState, useContext } from 'react';
import { settingsContext } from '../context/settings.context';
import UseBoardScanner from './useBoardScanner';

class AIStates {
	static EASY = new AIStates(0);
	static MEDIUM = new AIStates(1);
	static HARD = new AIStates(2);
	static EXTREME = new AIStates(3);

	constructor(state) {
		this.state = state;
	}
}

const UseComputerAI = (board, setBoard) => {
	const { aiDifficulty } = useContext(settingsContext);
	const [aiState, setAiState] = useState(1);
	const [lastAttackedCoordX, setLastAttackedCoordX] = useState(0);
	const [lastAttackedCoordY, setLastAttackedCoordY] = useState(0);
	const { getRandomNonHitCell, isCellInGrid } = UseBoardScanner(board, board.length, board.length);
	const [cpuThinkingTime, setCpuThinkingTime] = useState(0);
	const [isSearchingShip, setIsSearchingShip] = useState(false);
	const [isAttackingShip, setIsAttackingShip] = useState(false);
	const [shipAttackDirection, setShipAttackDirection] = useState({ x: 0, y: 0 });
	const [shipAttackDirectionX, setShipAttackDirectionX] = useState(0);
	const [shipAttackDirectionY, setShipAttackDirectionY] = useState(0);
	const [attackDirection, setAttackDirection] = useState(0);
	const [searchingHitList, setSearchingHitList] = useState([]);
	const [possibleAttackTarget, setPossibleAttackTarget] = useState({});

	const aiMakeMove = (registerHitTaken, setPlayerTurnState) => {
		switch (aiState) {
			case AIStates.EASY.state:
				runEasyDifficulty(registerHitTaken, setPlayerTurnState);
				break;
			case AIStates.MEDIUM.state:
				runMediumDifficulty(registerHitTaken, setPlayerTurnState);
				break;
			case AIStates.HARD.state:
				runHardDifficulty();
				break;

			default:
				break;
		}
	};

	const runEasyDifficulty = (registerHitTaken, setPlayerTurnState) => {
		console.log('running easy difficulty');
		setCpuThinkingTime(Math.floor(Math.random() * 5) + 1);
		setTimeout(() => {
			hitAnyCellEasy(registerHitTaken);
			setPlayerTurnState();
		}, parseInt(`${cpuThinkingTime}000`));
	};

	const runMediumDifficulty = (registerHitTaken, setPlayerTurnState) => {
		setCpuThinkingTime(Math.floor(Math.random() * 1) + 1);
		setTimeout(() => {
			// if (!board[lastAttackedCoordX][lastAttackedCoordY].isBattleShip && !isSearchingShip && !isAttackingShip)
			// 	hitAnyCell(registerHitTaken);
			if (isSearchingShip) {
				console.log('searching');
				// if (!searchingHitCell(searchingHitList[0].x, searchingHitList[0].y))
				searchingHitCell(searchingHitList[0].x, searchingHitList[0].y);
			} else if (isAttackingShip) {
				console.log('attacking');
				if (possibleAttackTarget.direction === 'down')
					attackingHitCell(possibleAttackTarget.x + 1, possibleAttackTarget.y);
				if (possibleAttackTarget.direction === 'up')
					attackingHitCell(possibleAttackTarget.x - 1, possibleAttackTarget.y);
				if (possibleAttackTarget.direction === 'right')
					attackingHitCell(possibleAttackTarget.x, possibleAttackTarget.y + 1);
				if (possibleAttackTarget.direction === 'left')
					attackingHitCell(possibleAttackTarget.x, possibleAttackTarget.y - 1);
			} else {
				console.log('hitting randomly');
				hitAnyCell(registerHitTaken);
			}

			setPlayerTurnState();
		}, parseInt(`${cpuThinkingTime}000`));
	};

	const runHardDifficulty = () => {
		console.log('running hard difficulty');
    };
    
    const hitAnyCellEasy = (registerHitTaken) => {
        const newBoard = board;
		const { coords } = getRandomNonHitCell();
		newBoard[coords.x][coords.y].isHit = true;
		setLastAttackedCoordX(coords.x);
		setLastAttackedCoordY(coords.y);
		setBoard([...newBoard]);
		registerHitTaken(coords.x, coords.y);
    }

	const hitAnyCell = (registerHitTaken) => {
		const newBoard = board;
		const { coords } = getRandomNonHitCell();
		newBoard[coords.x][coords.y].isHit = true;
		if (newBoard[coords.x][coords.y].isBattleShip) {
			setIsSearchingShip(true);
			const newList = [
				...searchingHitList,
				{ x: coords.x + 1, y: coords.y, direction: 'down' },
				{ x: coords.x - 1, y: coords.y, direction: 'up' },
				{ x: coords.x, y: coords.y + 1, direction: 'right' },
				{ x: coords.x, y: coords.y - 1, direction: 'left' },
			];
			setSearchingHitList(newList);
		}
		setLastAttackedCoordX(coords.x);
		setLastAttackedCoordY(coords.y);
		setBoard([...newBoard]);
		registerHitTaken(coords.x, coords.y);
    };
    

	const searchingHitCell = (x, y) => {
		const newList = searchingHitList;
		const atkTarget = newList.shift();
		setSearchingHitList(newList);
		console.log(searchingHitList);
		//TODO Potentially isCellInGrid not working
		console.log(isCellInGrid(x, y));
		if (!isCellInGrid(x, y)) return false;
		if (board[x][y].isHit) return false;

		if (board[x][y].isBattleShip) {
			setIsAttackingShip(true);
			setIsSearchingShip(false);
			setPossibleAttackTarget(atkTarget);
		}
		console.log(`is ship attcking: ${isAttackingShip}`);
		const newBoard = board;
		newBoard[x][y].isHit = true;
		setBoard([...newBoard]);
		return true;
	};

	const attackingHitCell = (x, y) => {
		if (!isCellInGrid(x, y)) return;
		setPossibleAttackTarget({
			...possibleAttackTarget,
			x: x,
			y: y,
		});
		console.log(possibleAttackTarget);
		if (board[x][y].isBattleShip) setIsAttackingShip(false);
		console.log(`is ship attcking: ${isAttackingShip}`);

		const newBoard = board;
		newBoard[x][y].isHit = true;
		setBoard([...newBoard]);
	};

	return { aiMakeMove };
};

export default UseComputerAI;
