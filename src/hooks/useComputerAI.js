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
	const { boardSize } = useContext(settingsContext);
	const { getRandomNonHitCell, isCellInGrid } = UseBoardScanner(board, boardSize.rows, boardSize.cols);
	const [cpuThinkingTime, setCpuThinkingTime] = useState(0);
	const [isHuntingShip, setIsHuntingShip] = useState(true);
	const [isTargetingShip, setIsTargetingShip] = useState(false);
	const [isAttackingShip, setIsAttackingShip] = useState(false);
	const [targetingHitList, setTargetingHitList] = useState([]);
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
		if (targetingHitList.length <= 1) {
			setIsTargetingShip(false);
			setIsHuntingShip(true);
		}
		setTimeout(() => {
			if (isHuntingShip) hitAnyCell(registerHitTaken);
			if (isTargetingShip) searchingHitCell(registerHitTaken);
			setPlayerTurnState();
		}, parseInt(`${cpuThinkingTime}000`));
	};

	const runHardDifficulty = () => {
		console.log('running hard difficulty');
	};

	const hitAnyCellEasy = (registerHitTaken) => {
		const newBoard = board;
		const { coords } = getRandomNonHitCell();
		// const coords = { x: 3, y: 2 };
		newBoard[coords.x][coords.y].isHit = true;
		setBoard([...newBoard]);
		registerHitTaken(coords.x, coords.y);
		return newBoard[coords.x][coords.y];
	};

	const hitAnyCell = (registerHitTaken) => {
		const hitCell = hitAnyCellEasy(registerHitTaken);
		const { x, y } = hitCell.coords;
		if (!hitCell.isBattleShip) return;

		//* set targeting list
		const allTargetedCells = [
			{ x: x + 1, y },
			{ x, y: y + 1 },
			{ x: x - 1, y },
			{ x, y: y - 1 },
		];

		const validTargetedCells = [];
		for (let i = 0; i < allTargetedCells.length; i++) {
			if (
				allTargetedCells[i].x >= boardSize.rows ||
				allTargetedCells[i].x < 0 ||
				allTargetedCells[i].y >= boardSize.cols ||
				allTargetedCells[i].y < 0
			)
				continue;
			if (board[allTargetedCells[i].x][allTargetedCells[i].y].isHit) continue;
			// console.log(board[allTargetedCells[i].x][allTargetedCells[i].y]);
			validTargetedCells.push(allTargetedCells[i]);
		}
		console.table(validTargetedCells);
		setTargetingHitList(() => {
			return validTargetedCells;
		});

		setIsHuntingShip(false);
		setIsTargetingShip(true);
	};

	const hitTargetedCell = (x, y, registerHitTaken) => {
		const newBoard = board;
		newBoard[x][y].isHit = true;
		setBoard([...newBoard]);
		registerHitTaken(x, y);
	};

	const searchingHitCell = (registerHitTaken) => {
		console.log(targetingHitList);
		hitTargetedCell(targetingHitList[0].x, targetingHitList[0].y, registerHitTaken);
		const newArr = targetingHitList;
		newArr.shift();
		setTargetingHitList(() => {
			return newArr;
		});
	};

	const attackingHitCell = (x, y) => {};

	return { aiMakeMove };
};

export default UseComputerAI;
