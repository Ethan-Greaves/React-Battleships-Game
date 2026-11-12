import { describe, expect, it } from 'vitest';
import type { Board } from '../../types/game';
import UseShipPlacer from '../useShipPlacer';

const makeBoard = (size: number): Board =>
	Array.from({ length: size }, (_, x) =>
		Array.from({ length: size }, (_, y) => ({
			coords: { x, y },
			isBattleShip: false,
			isShipTop: false,
			isShipMiddle: false,
			isShipBottom: false,
			isPreviewing: false,
			isUnplaceable: false,
			isHit: false,
			isDestroyed: false,
			type: '',
			direction: '',
		})),
	);

describe('placeShip', () => {
	it('places a horizontal ship on empty cells', () => {
		const board = makeBoard(8);
		const { placeShip } = UseShipPlacer(board, 8, 8);

		expect(placeShip({ x: 3, y: 4 }, 3, 'horizontal', 'cruiser')).toBe(true);
		expect(board[3][4].isBattleShip).toBe(true);
		expect(board[3][3].isBattleShip).toBe(true);
		expect(board[3][2].isBattleShip).toBe(true);
	});

	it('refuses to overlap an existing ship', () => {
		const board = makeBoard(8);
		const { placeShip } = UseShipPlacer(board, 8, 8);

		placeShip({ x: 3, y: 4 }, 3, 'horizontal', 'cruiser');
		expect(placeShip({ x: 3, y: 3 }, 2, 'vertical', 'destroyer')).toBe(false);
	});

	it('refuses to hang off the low edge', () => {
		const board = makeBoard(8);
		const { placeShip } = UseShipPlacer(board, 8, 8);

		expect(placeShip({ x: 3, y: 1 }, 3, 'horizontal', 'cruiser')).toBe(false);
		expect(board[3][1].isBattleShip).toBe(false); // nothing placed
	});

	it('refuses a start point outside the board', () => {
		const board = makeBoard(8);
		const { placeShip } = UseShipPlacer(board, 8, 8);

		expect(placeShip({ x: 8, y: 2 }, 2, 'vertical', 'destroyer')).toBe(false);
	});
});
