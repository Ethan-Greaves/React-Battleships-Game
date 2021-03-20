import './App.css';
import SetupBoard from './components/SetupBoard/SetupBoard';
import MainMenu from './components/MainMenu/MainMenu';
import GameSession from './components/GameSession/GameSession';
import { Switch, Route } from 'react-router-dom';
import { PlayerBoardProvider } from './context/playerBoard.context';

function App() {
	return (
		<div className="App">
			<PlayerBoardProvider>
				<Switch>
					<Route exact path="/" render={() => <MainMenu />} />
					<Route exact path="/setupBoard" render={() => <SetupBoard />} />
					<Route exact path="/gameSession" render={() => <GameSession />} />
				</Switch>
			</PlayerBoardProvider>
		</div>
	);
}

export default App;
