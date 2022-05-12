import { useState } from 'react';
import UseBoardScanner from './useBoardScanner';

const UseComputerAIEasy = (board, setBoard, registerHitTaken, setPlayerTurnState, hitAnyCellEasy) => {
	const { getRandomNonHitCell } = UseBoardScanner(board, board.length, board.length);
	const [cpuThinkingTime, setCpuThinkingTime] = useState(0);

	const easySimulateTurn = () => {
		console.log('running easy difficulty');
		setCpuThinkingTime(Math.floor(Math.random() * 4) + 1);
		setTimeout(() => {
			hitAnyCellEasy(registerHitTaken);
			setPlayerTurnState();
		}, parseInt(`${cpuThinkingTime}000`));
	};

	return { easySimulateTurn };
};
export default UseComputerAIEasy;
