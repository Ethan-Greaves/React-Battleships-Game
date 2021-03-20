import React, { createContext, useReducer } from 'react';
import playerBoardReducer from '../reducers/playerBoard.reducer';
const playerBoardContext = createContext();

const PlayerBoardProvider = ({ children }) => {
	const [board, dispatch] = useReducer(playerBoardReducer, {
		playerBoard: [],
	});
	return <playerBoardContext.Provider value={{ board, dispatch }}>{children}</playerBoardContext.Provider>;
};

export { PlayerBoardProvider, playerBoardContext };
