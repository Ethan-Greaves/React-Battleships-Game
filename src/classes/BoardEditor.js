class BoardEditor {
	constructor(board, shipsRemaining, battleshipAllowance) {
		this.board = board;
		this.battleshipAllowance = battleshipAllowance;
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
}

export default BoardEditor;
