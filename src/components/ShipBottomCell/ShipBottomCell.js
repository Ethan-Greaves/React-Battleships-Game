import ShipBottomCellImg from '../../assets/Battleship/PNG/ShipBottom.png';
import ShipBottomCellHitImg from '../../assets/Battleship/PNG/ShipBottomHit.png';
import generalStyles from '../../generalCSS/generalStyle';

const ShipBottomCell = ({ isHit, isDestroyed, isPreviewing }) => {
	const styles = generalStyles();
	let img = ShipBottomCellImg;

	if (isHit) img = ShipBottomCellHitImg;
	if (isPreviewing) img = ShipBottomCellImg;

	return (
		<div>
			<img className={styles.cellSize} src={img} alt="Ship Bottom Cell" />
		</div>
	);
};
export default ShipBottomCell;
