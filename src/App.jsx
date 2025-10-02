import Filters from './components/Filters/Filters';
import Modal from './components/Modal/Modal';
import Results from './components/Results/Results';
import { AppProvider } from './context/AppContext';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

import './styles/globals.css';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import Characters from './components/Characters/Characters';
import Contact from './components/Contact/Contact';

function Homepage() {
	return (
		<>
			<Filters />
			<Results />
			<Modal />
		</>
	);
}

function App() {
	return (
		<AppProvider>
			<Router>
				<div
					className="min-h-screen"
					style={{
						background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
					}}
				>
					<div className="container mx-auto px-4 py-8">
						<Header />
						<Routes>
							<Route
								path="/"
								element={<Homepage />}
							/>
							<Route
								path="/characters"
								element={<Characters />}
							/>
							<Route
								path="/contacto"
								element={<Contact />}
							/>
							<Route
								path="/character/:id"
								element={<CharacterDetail />}
							/>
						</Routes>
					</div>
				</div>
			</Router>
		</AppProvider>
	);
}

export default App;
