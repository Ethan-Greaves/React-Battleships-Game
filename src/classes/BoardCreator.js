class BoardCreator {
	constructor(rows, cols) {
		this.rows = rows;
		this.cols = cols;
	}

	//* Create a board where all the isBattleShip cells are false
	createEmptyBoard() {
		const gridArr = [];
		for (let x = 0; x < this.cols; x++) {
			const rowArr = [];
			for (let y = 0; y < this.rows; y++) {
				rowArr.push({ coords: { x, y }, isBattleShip: false });
			}
			gridArr.push(rowArr);
		}

		return gridArr;
	}

	//* Create a board where the isBattleship cells will be true based on ships remaining
	//* Rest will be false
	createRandomBoard() {
		const gridArr = [];
		for (let x = 0; x < this.rows; x++) {
			const rowArr = [];
			for (let y = 0; y < this.cols; y++) {
				rowArr.push({ coords: { x, y }, isBattleShip: false });
			}
			gridArr.push(rowArr);
		}

		while (this.shipsRemaining > 0) {
			const randomCoords =
				gridArr[Math.floor(Math.random() * this.rows)][
					Math.floor(Math.random() * this.cols)
				];

			if (!randomCoords.isBattleShip) randomCoords.isBattleShip = true;
			this.shipsRemaining--;
		}

		return gridArr;
	}
}

export default BoardCreator;
