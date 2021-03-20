import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

// const Board = ({ boardData }) => {
// 	return boardData.map((rows) => {
// 		return (
// 			<Grid container justify="center">
// 				{rows.map((cell) => {
// 					return (
//                         <Grid item>
//                             {/* TODO this is what we want to make reusuable */}
// 							<GridCell
// 								clickFunction={clickFunction}
// 								isBattleShip={cell.isBattleShip}
// 								coords={cell.coords}
// 								type={cell.type}
// 							/>
// 						</Grid>
// 					);
// 				})}
// 			</Grid>
// 		);
// 	});
// };

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return this.props.boardData.map((rows) => {
			return (
				<Grid container justify="center">
					{rows.map((cell) => {
						return <Grid item>{this.props.render(cell)}</Grid>;
					})}
				</Grid>
			);
		});
	}
}

export default Board;
