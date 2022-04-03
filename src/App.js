import BoardSetup from './scenes/boardSetup/boardSetup';
import MainMenu from './scenes/mainMenu/mainMenu';
import Rules from './scenes/rules/rules';
import GameSession from './components/GameSession/GameSession';
import { Switch, Route } from 'react-router-dom';
import { PlayerBoardProvider } from './context/playerBoard.context';

function App() {
	return (
		<div className="App">
			<PlayerBoardProvider>
				<Switch>
					<Route exact path="/" render={() => <MainMenu />} />
					<Route exact path="/setupBoard" render={() => <BoardSetup />} />
					<Route exact path="/gameSession" render={() => <GameSession />} />
					<Route exact path="/rules" render={() => <Rules />} />
				</Switch>
			</PlayerBoardProvider>
		</div>
	);
}

export default App;
