import { useState } from 'react';

/**
 * Using a class to represent an enum because JavaScript does not have enums
 */
class GameStates {
	static START = new GameStates('start');
	static PLAYERTURN = new GameStates('playerTurn');
	static ENEMYTURN = new GameStates('enemyTurn');
	static WON = new GameStates('won');
	static LOST = new GameStates('lost');

	constructor(state) {
		this.state = state;
	}
}

const UseBattleSystem = (setDialogueText) => {
	const [gameState, setGameState] = useState(GameStates.START);

	const setPlayerTurnState = () => {
		setGameState(GameStates.PLAYERTURN);
		setDialogueText('Your Turn');
	};

	const setEnemyTurnState = () => {
		setGameState(GameStates.ENEMYTURN);
		setDialogueText('Enemy Turn');
	};

	const setWonState = () => {
		setGameState(GameStates.WON);
		setDialogueText('You Win');
	};

	const setLostState = () => {
		setGameState(GameStates.LOST);
		setDialogueText('You Lose');
	};

	return { gameState, setPlayerTurnState, setEnemyTurnState, setWonState, setLostState };
};
export default UseBattleSystem;
