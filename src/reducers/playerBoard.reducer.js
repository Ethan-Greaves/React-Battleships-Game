const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_PLAYER_BOARD': {
			const newPlayerBoard = action.board;
			return (state.board = newPlayerBoard);
		}

		case 'GET_PLAYER_BOARD':
			return state.board;

		default:
			break;
	}
};

export default reducer;
