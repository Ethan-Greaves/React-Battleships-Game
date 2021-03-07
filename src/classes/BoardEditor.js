class BoardEditor {
	constructor(board) {
		this.board = board;
	}

	//#region GETTERS
	getBoard() {
		return this.board;
	}

	//#endregion

	placeShip(x, y, amount, direction) {
		if (!this.board[x][y].isBattleShip) {
			for (let i = 0; i < amount; i++) {
				//* set isBattleShip to be true or false
				switch (direction) {
					case 'up':
						this.board[x - i][y].isBattleShip = !this.board[x - i][y].isBattleShip;
						break;
					case 'down':
						this.board[x + i][y].isBattleShip = !this.board[x + i][y].isBattleShip;
						break;

					case 'left':
						this.board[x][y - i].isBattleShip = !this.board[x][y - i].isBattleShip;
						break;

					case 'right':
						this.board[x][y + i].isBattleShip = !this.board[x][y + i].isBattleShip;
						break;

					default:
						break;
				}
			}
		}
	}

	//* Place carrier ship on grid which occupies five grid cells
	placeCarrier(x, y, direction) {
		this.placeShip(x, y, 5, direction);
	}

	placeBattleship(x, y, direction) {
		this.placeShip(x, y, 4, direction);
	}

	placeCruiser(x, y, direction) {
		this.placeShip(x, y, 3, direction);
	}

	placeSubmarine(x, y, direction) {
		this.placeCruiser(x, y, direction);
	}

	placeDestroyer(x, y, direction) {
		this.placeShip(x, y, 2, direction);
	}
}

export default BoardEditor;
