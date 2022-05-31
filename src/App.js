import BoardSetup from './scenes/boardSetup/boardSetup';
import MainMenu from './scenes/mainMenu/mainMenu';
import Rules from './scenes/rules/rules';
import Settings from './scenes/settings/settings';
import GameSession from './scenes/gameSession/gameSession';
import { Switch, Route } from 'react-router-dom';
import { SettingsProvider } from './context/settings.context';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

function App() {
	const theme = createMuiTheme({
		spacing: 8,

		palette: {
			primary: {
				main: '#ff9033',
			},
			secondary: {
				main: '#ffff00',
			},
		},

		shape: {
			borderRadius: '10px',
		},
	});

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<SettingsProvider>
					<Switch>
						<Route exact path="/" render={() => <MainMenu />} />
						<Route exact path="/setupBoard" render={() => <BoardSetup />} />
						<Route exact path="/gameSession" render={() => <GameSession />} />
						<Route exact path="/rules" render={() => <Rules />} />
						<Route exact path="/settings" render={() => <Settings />} />
					</Switch>
				</SettingsProvider>
			</ThemeProvider>
		</div>
	);
}

export default App;
