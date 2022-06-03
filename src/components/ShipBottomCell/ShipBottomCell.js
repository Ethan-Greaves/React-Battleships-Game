import ShipBottomCellImg from '../../assets/Battleship/PNG/ShipBottom.png';
import ShipBottomCellHitImg from '../../assets/Battleship/PNG/ShipBottomHit.png';
import generalStyles from '../../generalCSS/generalStyle';
import shipBottomCellStyles from './ShipBottomCellStyles';

const ShipBottomCell = ({ isHit, isDestroyed, orientation }) => {
	const generalStyle = generalStyles();
	const styles = shipBottomCellStyles();
	let img = ShipBottomCellImg;

	if (isHit) img = ShipBottomCellHitImg;

	return (
		<div>
			<img
				className={`${generalStyle.cellSize} ${orientation === 'horizontal' ? styles.rotate : null}`}
				src={img}
				alt="Ship Bottom Cell"
			/>
		</div>
	);
};
export default ShipBottomCell;
