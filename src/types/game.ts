export type Orientation = 'horizontal' | 'vertical';

export type ShipType = 'destroyer' | 'submarine' | 'cruiser' | 'battleship' | 'carrier';

export interface Coord {
	x: number;
	y: number;
}

export interface Cell {
	coords: Coord;
	isBattleShip: boolean;
	isPreviewing: boolean;
	isUnplaceable: boolean;
	isHit: boolean;
	isDestroyed: boolean;
	type: ShipType | '';
	isShipBottom: boolean;
	isShipMiddle: boolean;
	isShipTop: boolean;
	direction: Orientation | '';
}

export type Board = Cell[][];
