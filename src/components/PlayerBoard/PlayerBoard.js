import React, { useContext, useState, useEffect } from 'react';
import { settingsContext } from '../../context/settings.context';
import useBoardCreator from '../../hooks/useBoardCreator';
import GridCell from '../GridCell/GridCell';
import PlayerBoardSetup from '../Board/Board';

const PlayerBoard = ({ gameState, setPlayerTurnState, boardData }) => {
	const [board, setBoard, resetBoard] = useBoardCreator(boardData.length, boardData.length);
    console.log('re-rendering');
    
	useEffect(() => {
		setBoard(boardData);
		if (gameState !== 'enemyTurn') return;
		const computerThinkingTime = Math.floor(Math.random() * 5) + 1;
		setTimeout(() => {
			const newBoard = board;
			newBoard[Math.floor(Math.random() * boardData.length)][Math.floor(Math.random() * boardData.length)].isHit = true;
			setBoard([...newBoard]);
			setPlayerTurnState();
		}, parseInt(`${computerThinkingTime}000`));
	}, [setPlayerTurnState]);

	return (
		<div>
			<PlayerBoardSetup
				boardData={board}
				render={(cell) => {
					return (
						<GridCell
							clickFunction={() => {
								return;
							}}
							hoverFunction={() => {
								return;
							}}
							hoverExitFunction={() => {
								return;
							}}
							isBattleShip={cell.isBattleShip}
							isPreviewing={cell.isPreviewing}
							isUnplaceable={cell.isUnplaceable}
							isHit={cell.isHit}
							coords={cell.coords}
							computerBoardCell={false}
							type={cell.type}
						/>
					);
				}}
			/>
		</div>
	);
};
export default PlayerBoard;
