import waterCellImg from '../../assets/Battleship/PNG/tile.png';
import waterCellHitImg from '../../assets/Battleship/PNG/tile_red.png';
import waterCellMissImg from '../../assets/Battleship/PNG/tile_green.png';
import generalStyles from '../../generalCSS/generalStyle';
import useAudio from '../../hooks/useAudio';
import WaterPlopSfx from '../../assets/sfx/WaterMissPlop.ogg';
import { useEffect } from 'react';

const WaterCell = ({ isHit, isBattleship }) => {
	const [isPlaying, toggle] = useAudio(WaterPlopSfx, false);
	const styles = generalStyles();
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
			<img className={styles.cellSize} src={img} alt="Water cell" />
		</>
	);
};
export default WaterCell;
