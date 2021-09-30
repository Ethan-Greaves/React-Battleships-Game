import useBoardScanner from './useBoardScanner';

const UseShipPreview = (board, rows, cols) => {
    const { getRandomEmptyCell, isCellEmpty, isCellInGrid } = useBoardScanner(board, rows, cols);

    const showPreview = (coords, amount, direction) => {
        const { x, y } = coords;
        const allCellCoords = [];
		board[x][y].isPreviewing = true;
        
        // for (let i = 0; i < ; i++) {
    
        // }

        if (direction === "vertical") {
            for (let i = 0; i < amount; i++) {
                if (!isCellInGrid(x - i, y) || !isCellEmpty(x - i, y))
                    //board[x - i][y].isUnplaceable = true; //* Show red preview to show cant be placed
                    return;
                else {
                    board[x - i][y].isUnplaceable = false;
                    board[x - i][y].isPreviewing = true;
                }
            }
        }
        else {
            for (let i = 0; i < amount; i++) {
                if (!isCellInGrid(x, y - i) || !isCellEmpty(x, y - i))
                    //board[x - i][y].isUnplaceable = true; //* Show red preview to show cant be placed
                    return;
                else {
                    board[x][y - i].isUnplaceable = false;
                    board[x][y - i].isPreviewing = true;
                }
            }
        }
    }

    const removePreview = (coords, amount, direction) => {
        const { x, y } = coords;
        board[x][y].isPreviewing = false;
        
        if (direction === "vertical") {
            for (let i = 0; i < amount; i++) {
                if (!isCellInGrid(x - i, y) || !isCellEmpty(x - i, y)) continue;
                board[x - i][y].isPreviewing = false;
            }
        }
        else {
            for (let i = 0; i < amount; i++) {
                if (!isCellInGrid(x, y - i) || !isCellEmpty(x, y - i)) continue;
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