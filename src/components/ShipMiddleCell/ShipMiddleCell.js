import ShipMiddleCellImg from '../../assets/Battleship/PNG/ShipMiddle.png';
import ShipMiddleCellHitImg from '../../assets/Battleship/PNG/shipMiddleHit.png';
import generalStyles from '../../generalCSS/generalStyle';
import shipMiddleCellStyles from './ShipMiddleCellStyles';

const ShipMiddleCell = ({ isHit, isDestroyed, orientation }) => {
	const generalStyle = generalStyles();
	const styles = shipMiddleCellStyles();
	let img = ShipMiddleCellImg;

	if (isHit) img = ShipMiddleCellHitImg;

	return (
		<div>
			<img
				className={`${generalStyle.cellSize} ${orientation === 'horizontal' ? styles.rotate : null}`}
				src={img}
				alt="Ship Middle Cell"
			/>
		</div>
	);
};
export default ShipMiddleCell;
