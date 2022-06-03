import ShipTopCellImg from '../../assets/Battleship/PNG/ShipTop.png';
import ShipTopCellHitImg from '../../assets/Battleship/PNG/ShipTopHit.png';
import generalStyles from '../../generalCSS/generalStyle';
import shipTopCellStyles from './ShipTopCellStyles';
const ShipTopCell = ({ isHit, isDestroyed, orientation }) => {
	const generalStyle = generalStyles();
    const styles = shipTopCellStyles();
	let img = ShipTopCellImg;

	if (isHit) img = ShipTopCellHitImg;

	return (
		<div>
			<img
				className={`${generalStyle.cellSize} ${orientation === 'horizontal' ? styles.rotate : null}`}
				src={img}
				alt="Ship Top Cell"
			/>
		</div>
	);
};
export default ShipTopCell;
