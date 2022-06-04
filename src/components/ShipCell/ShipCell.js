import { useEffect, useState, useCallback } from 'react';
import generalStyles from '../../generalCSS/generalStyle';
import shipCellStyles from './ShipCellStyles';
import ShipMiddleCellImg from '../../assets/Battleship/PNG/ShipMiddle.png';
import ShipMiddleCellHitImg from '../../assets/Battleship/PNG/shipMiddleHit.png';
import ShipTopCellImg from '../../assets/Battleship/PNG/ShipTop.png';
import ShipTopCellHitImg from '../../assets/Battleship/PNG/ShipTopHit.png';
import ShipBottomCellImg from '../../assets/Battleship/PNG/ShipBottom.png';
import ShipBottomCellHitImg from '../../assets/Battleship/PNG/ShipBottomHit.png';

const ShipCell = ({ isHit, isDestroyed, orientation, type }) => {
	const [shipImg, setShipImg] = useState('bottom');
	const generalStyle = generalStyles();
    const styles = shipCellStyles();

    const isHitImg = useCallback((normal, hit) => {
		let img;
		if (!isHit) img = normal;
		else img = hit;
		return img;
    }, [isHit]);
    
    const determineShipType = useCallback(() => {
		switch (type) {
			case 'top':
				setShipImg(isHitImg(ShipTopCellImg, ShipTopCellHitImg));
				break;
			case 'middle':
				setShipImg(isHitImg(ShipMiddleCellImg, ShipMiddleCellHitImg));
				break;
			case 'bottom':
				setShipImg(isHitImg(ShipBottomCellImg, ShipBottomCellHitImg));
				break;
			default:
				break;
		}
	}, [isHitImg, type]);

	useEffect(() => {
		determineShipType();
	}, [determineShipType]);

    return (
		<div>
			<img
				className={`${generalStyle.cellSize} ${orientation === 'horizontal' ? styles.rotate : null}`}
				src={shipImg}
				alt="Ship Middle Cell"
			/>
		</div>
	);
};
export default ShipCell;
