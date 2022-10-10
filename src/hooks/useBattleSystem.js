import { useRef } from 'react';

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
	const gameState = useRef(GameStates.START);

	const setPlayerTurnState = () => {
		gameState.current = GameStates.PLAYERTURN;
		setDialogueText('Your Turn');
	};

	const setEnemyTurnState = () => {
		gameState.current = GameStates.ENEMYTURN;
		setDialogueText('Enemy Turn');
	};

	const setWonState = () => {
		gameState.current = GameStates.WON;
		setDialogueText('You Win');
	};

	const setLostState = () => {
		gameState.current = GameStates.LOST;
		setDialogueText('You Lose');
	};


	return { gameState, setPlayerTurnState, setEnemyTurnState, setWonState, setLostState };
};
export default UseBattleSystem;
