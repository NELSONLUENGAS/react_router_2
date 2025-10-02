import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className="text-center mb-12">
			<h1 className="title-font text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
				Rick and Morty Explorer
			</h1>
			<p className="text-xl text-gray-300 max-w-2xl mx-auto">
				Explora el multiverso y descubre todos los personajes de la serie Rick
				and Morty
			</p>

			<nav>
				<ul className="flex justify-center align-center gap-5">
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'text-green-500 border border-b-2 border-b-current'
									: ''
							}
							to="/"
						>
							Inicio
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'text-green-500 border border-b-2 border-b-current'
									: ''
							}
							to="/characters"
						>
							Characters
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'text-green-500 border border-b-2 border-b-current'
									: ''
							}
							to="/contact"
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
