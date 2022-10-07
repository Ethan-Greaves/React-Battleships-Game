import { useState } from 'react';
import UseBoardScanner from './useBoardScanner';

const UseComputerAIEasy = (
	board,
	setBoard,
	registerHitTaken,
	setPlayerTurnState,
	hitAnyCellEasy,
	addTotalHitCpu
) => {
	const { getRandomNonHitCell } = UseBoardScanner(board, board.length, board.length);
	const [cpuThinkingTime, setCpuThinkingTime] = useState(0);

	const easySimulateTurn = () => {
		setCpuThinkingTime(Math.floor(Math.random() * 4) + 1);
		setTimeout(() => {
			hitAnyCellEasy(registerHitTaken);
			setPlayerTurnState();
		}, parseInt(`${cpuThinkingTime}000`));
	};

	return { easySimulateTurn };
};
export default UseComputerAIEasy;
