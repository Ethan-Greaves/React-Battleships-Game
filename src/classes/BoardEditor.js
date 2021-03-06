class BoardEditor {
	constructor(board, shipsRemaining) {
		this.board = board;
		this.shipsRemaining = shipsRemaining;
	}

	//#region GETTERS
	getBoard() {
		return this.board;
	}

	getBattleshipAllowance() {
		return this.battleshipAllowance;
	}

	getShipsRemaining() {
		return this.shipsRemaining;
	}
	//#endregion

	changeBattleshipCell(x, y) {
		//* If there are ships remaining to be placed
		//* OR if the cell being clicked is already a battleship
		if (this.shipsRemaining > 0 || this.board[x][y].isBattleShip) {
			//* set isBattleShip to be true or false
			this.board[x][y].isBattleShip = !this.board[x][y].isBattleShip;
			//*increment/decrement ships remaining based on true/false value of cell clicked
			this.board[x][y].isBattleShip ? this.shipsRemaining-- : this.shipsRemaining++;
		}
	}

	placeShip(x, y, amount, direction) {
		if (this.shipsRemaining > 0 || this.board[x][y].isBattleShip) {
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
