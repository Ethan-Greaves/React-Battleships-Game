import BoardSetup from './scenes/boardSetup/boardSetup';
import MainMenu from './scenes/mainMenu/mainMenu';
import Rules from './scenes/rules/rules';
import Settings from './scenes/settings/settings';
import GameSession from './components/GameSession/GameSession';
import { Switch, Route } from 'react-router-dom';
import { PlayerBoardProvider } from './context/playerBoard.context';
import { SettingsProvider } from './context/settings.context';

function App() {
	return (
		<div className="App">
			<PlayerBoardProvider>
				<SettingsProvider>
					<Switch>
						<Route exact path="/" render={() => <MainMenu />} />
						<Route exact path="/setupBoard" render={() => <BoardSetup />} />
						<Route exact path="/gameSession" render={() => <GameSession />} />
						<Route exact path="/rules" render={() => <Rules />} />
						<Route exact path="/settings" render={() => <Settings />} />
					</Switch>
				</SettingsProvider>
			</PlayerBoardProvider>
		</div>
	);
}

export default App;
