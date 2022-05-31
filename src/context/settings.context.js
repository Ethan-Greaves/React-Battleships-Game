import React, { createContext, useState } from 'react';
import { UseLocalStorage } from '../hooks/useLocalStorage';
import { cpuDifficultyValues, boardSizes } from '../misc/settingsValues';

const settingsContext = createContext();

const SettingsProvider = ({ children }) => {
	const [boardSizeVal, setBoardSizeVal] = UseLocalStorage('boardSizeVal', 0);
	const [aiDifficulty, setAiDifficulty] = UseLocalStorage('aiDifficulty', cpuDifficultyValues[0].value);
	const boardSize = boardSizes[boardSizeVal];

	return (
		<settingsContext.Provider value={{ boardSize, boardSizeVal, setBoardSizeVal, aiDifficulty, setAiDifficulty }}>
			{children}
		</settingsContext.Provider>
	);
};
export { SettingsProvider, settingsContext };
