import ShipBottomCellImg from '../../assets/Battleship/PNG/ShipBottom.png';
import ShipBottomCellHitImg from '../../assets/Battleship/PNG/ShipBottomHit.png';
import generalStyles from '../../generalCSS/generalStyle';

const ShipBottomCell = ({ isHit, isDestroyed }) => {
	const styles = generalStyles();
	let img = ShipBottomCellImg;

	if (isHit) img = ShipBottomCellHitImg;

	return (
		<div>
			<img className={styles.cellSize} src={img} alt="Water cell" />
		</div>
	);
};
export default ShipBottomCell;
