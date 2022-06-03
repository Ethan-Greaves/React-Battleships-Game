import waterCellImg from '../../assets/Battleship/PNG/tile.png';
import waterCellHitImg from '../../assets/Battleship/PNG/tile_red.png';
import waterCellMissImg from '../../assets/Battleship/PNG/tile_green.png';
import generalStyles from '../../generalCSS/generalStyle';
import waterCellStyles from './WaterCellStyles';
import useAudio from '../../hooks/useAudio';
import WaterPlopSfx from '../../assets/sfx/WaterMissPlop.ogg';
import { useEffect } from 'react';

const WaterCell = ({ isHit, isBattleship, isPreviewing }) => {
	const [isPlaying, toggle] = useAudio(WaterPlopSfx, false);
	const generalStyle = generalStyles();
	const style = waterCellStyles();

	let img = waterCellImg;

	if (isHit && isBattleship) img = waterCellHitImg;
	else if (isHit) {
		img = waterCellMissImg;
	}

	useEffect(() => {
		if (isHit) toggle();
	}, []);

	return (
		<>
			<img
				className={`${generalStyle.cellSize} ${isPreviewing ? style.previewCell : null}`}
				src={img}
				alt="Water cell"
			/>
		</>
	);
};
export default WaterCell;
