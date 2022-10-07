import React, { useState, useContext } from 'react';
import { settingsContext } from '../context/settings.context';
import UseBoardScanner from './useBoardScanner';
import UseComputerAIEasy from './useComputerAIEasy';
import UseComputerAIMedium from './useComputerAIMedium';

class AIStates {
	static EASY = new AIStates(0);
	static MEDIUM = new AIStates(1);
	static HARD = new AIStates(2);
	static EXTREME = new AIStates(3);

	constructor(state) {
		this.state = state;
	}
}

const UseComputerAI = (
	board,
	setBoard,
	registerHitTaken,
	setPlayerTurnState,
	isShipDestroyed,
	addShipHitCpu,
	addTotalHitCpu
) => {
	const { aiDifficulty } = useContext(settingsContext);
	const [aiState, setAiState] = useState(1);
	const { boardSize } = useContext(settingsContext);
	const { getRandomNonHitCell } = UseBoardScanner(board, boardSize.rows, boardSize.cols);

	const hitAnyCellEasy = () => {
		// addTotalHitCpu();
		const newBoard = board;
		const { coords } = getRandomNonHitCell();
		newBoard[coords.x][coords.y].isHit = true;
		// if (newBoard[coords.x][coords.y].isBattleShip) addShipHitCpu();
		registerHitTaken(coords.x, coords.y);
		setBoard([...newBoard]);

		return newBoard[coords.x][coords.y];
	};

	const { easySimulateTurn } = UseComputerAIEasy(
		board,
		setBoard,
		registerHitTaken,
		setPlayerTurnState,
		hitAnyCellEasy,
		addTotalHitCpu
	);
	const { mediumSimulateTurn } = UseComputerAIMedium(
		board,
		setBoard,
		registerHitTaken,
		setPlayerTurnState,
		hitAnyCellEasy,
		isShipDestroyed,
		addTotalHitCpu,
		addShipHitCpu
	);

	const aiMakeMove = () => {
		switch (aiState) {
			case AIStates.EASY.state:
				easySimulateTurn();
				break;
			case AIStates.MEDIUM.state:
				mediumSimulateTurn();
				break;
			case AIStates.HARD.state:
				runHardDifficulty();
				break;

			default:
				break;
		}
	};

	const runHardDifficulty = () => {
		console.log('running hard difficulty');
	};

	return { aiMakeMove, aiDifficulty };
};

export default UseComputerAI;
