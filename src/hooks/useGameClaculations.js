import { useContext } from 'react';
import { settingsContext } from '../context/settings.context';

const UseGameCalculations = () => {
	const { aiDifficulty } = useContext(settingsContext);

	const calculateAccuracy = (shipHits, totalHits) => {
		return Math.round((shipHits / totalHits) * 100) || 0;
	};

	const calculateScore = () => {
		let difficultyModifier = aiDifficulty * 1.5 + 1;
		return calculateAccuracy() * difficultyModifier;
	};

	return { calculateAccuracy, calculateScore };
};
export default UseGameCalculations;
