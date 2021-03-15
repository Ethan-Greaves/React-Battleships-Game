import './App.css';
import SetupBoard from './components/SetupBoard/SetupBoard';
import MainMenu from './components/MainMenu/MainMenu';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Switch>
			<Route exact path="/" render={() => <MainMenu />} />
			<Route exact path="/setupBoard" render={() => <SetupBoard />} />
		</Switch>
	);
}

export default App;
