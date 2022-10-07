import { useState } from 'react';
import UseBoardScanner from './useBoardScanner';

const UseComputerAIMedium = (
	board,
	setBoard,
	registerHitTaken,
	setPlayerTurnState,
	hitAnyCellEasy,
	isShipDestroyed,
	addShipHitCpu,
	addTotalHitCpu
) => {
	const [cpuThinkingTime, setCpuThinkingTime] = useState(0);
	const [isHuntingShip, setIsHuntingShip] = useState(true);
	const [isTargetingShip, setIsTargetingShip] = useState(false);
	const [targetingHitList, setTargetingHitList] = useState([]);
	const [initialHitCell, setInitialHitCell] = useState({});
	const { getCellCoordsOfType } = UseBoardScanner(board, board.length, board.length);

	const mediumSimulateTurn = () => {
		setCpuThinkingTime(Math.floor(Math.random() * 3) + 1);
		setTimeout(() => {
			if (isHuntingShip) hitAnyCell();
			if (isTargetingShip) {
				searchingHitCell();
			}
			setPlayerTurnState();
		}, parseInt(`${cpuThinkingTime}000`));
	};

	const shuffle = (array) => {
		array.sort(() => Math.random() - 0.5);
	};

	const hitAnyCell = () => {
		setTargetingHitList(() => {
			return [];
		});

		const hitCell = hitAnyCellEasy();
		const { x, y } = hitCell.coords;
		if (!hitCell.isBattleShip) return;
		isShipDestroyed(x, y);
		setInitialHitCell(() => {
			return hitCell;
		});
		createTargetingList(x, y);
		setIsHuntingShip(false);
		setIsTargetingShip(true);
	};

	const hitCell = (x, y) => {
		const newBoard = board;
		newBoard[x][y].isHit = true;
		registerHitTaken(x, y);
		if (newBoard[x][y].isBattleShip) {
			// addShipHitCpu();
			isShipDestroyed(x, y);
		}
		setBoard([...newBoard]);

		return newBoard[x][y];
	};

	const searchingHitCell = () => {
		if (targetingHitList.length <= 0 || board[initialHitCell.coords.x][initialHitCell.coords.y].isDestroyed) {
			setIsTargetingShip(false);
			setIsHuntingShip(true);
			hitAnyCell();
			return;
		}
		const cell = hitCell(targetingHitList[0].x, targetingHitList[0].y);

		const newArr = targetingHitList;
		newArr.shift();
		setTargetingHitList(() => {
			return newArr;
		});

		if (cell.isBattleShip) {
			createTargetingList(cell.coords.x, cell.coords.y);
		}
		if (!cell.isBattleShip && targetingHitList <= 0)
			createTargetingList(initialHitCell.coords.x, initialHitCell.coords.y);
	};

	const createTargetingList = (x, y) => {
		const allTargetedCells = [
			{ x: x + 1, y },
			{ x, y: y + 1 },
			{ x: x - 1, y },
			{ x, y: y - 1 },
		];

		const validTargetedCells = [];
		for (let i = 0; i < allTargetedCells.length; i++) {
			if (
				allTargetedCells[i].x >= board.length ||
				allTargetedCells[i].x < 0 ||
				allTargetedCells[i].y >= board.length ||
				allTargetedCells[i].y < 0
			)
				continue;
			if (board[allTargetedCells[i].x][allTargetedCells[i].y].isHit) continue;
			validTargetedCells.push(allTargetedCells[i]);
		}
		shuffle(validTargetedCells);
		setTargetingHitList(() => {
			return validTargetedCells;
		});
	};

	return { mediumSimulateTurn };
};
export default UseComputerAIMedium;
