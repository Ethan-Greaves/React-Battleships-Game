import waterCellImg from '../../assets/Battleship/PNG/tile.png';
import waterCellHitImg from '../../assets/Battleship/PNG/tile_red.png';
import waterCellMissImg from '../../assets/Battleship/PNG/tile_green.png';
import generalStyles from '../../generalStyling/generalStyle';
const WaterCell = ({ isHit, isBattleship }) => {
	const styles = generalStyles();
	let img = waterCellImg;

	if (isHit && isBattleship) img = waterCellHitImg;
	else if (isHit) img = waterCellMissImg;

	return (
		<>
			<img className={styles.cellSize} src={img} alt="Water cell" />
		</>
	);
};
export default WaterCell;
