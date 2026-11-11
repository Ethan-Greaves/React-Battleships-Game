import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

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
