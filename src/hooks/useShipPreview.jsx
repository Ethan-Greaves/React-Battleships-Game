import useBoardScanner from './useBoardScanner';

const UseShipPreview = (board, rows, cols) => {
    const { getRandomEmptyCell, isCellEmpty, isCellInGrid } = useBoardScanner(board, rows, cols);

    const showPreview = (coords, amount, direction) => {
        const { x, y } = coords;
		board[x][y].isPreviewing = true;

        if (direction === "vertical") {
            for (let i = 0; i < amount; i++) {
                if (!isCellInGrid(x - i, y) || !isCellEmpty(x - i, y))
                    return;
                else {
                    board[x - i][y].isPreviewing = true;
                }
            }
        }
        else {
            for (let i = 0; i < amount; i++) {
                if (!isCellInGrid(x, y - i) || !isCellEmpty(x, y - i))
                    return;
                else {
                    board[x][y - i].isPreviewing = true;
                }
            }
        }
    }

    const removePreview = (coords, amount, direction) => {
        const { x, y } = coords;
        
        if (direction === "vertical") {
            for (let i = 0; i < amount; i++) {
                if (!isCellInGrid(x - i, y) || !isCellEmpty(x - i, y)) return;
                board[x - i][y].isPreviewing = false;
            }
        }
        else {
            for (let i = 0; i < amount; i++) {
                if (!isCellInGrid(x, y - i) || !isCellEmpty(x, y - i)) return;
                board[x][y - i].isPreviewing = false;
            }
        }
    }

    return {
        showPreview,
        removePreview
	};
};
export default UseShipPreview;