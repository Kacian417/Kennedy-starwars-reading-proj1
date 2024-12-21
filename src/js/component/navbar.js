import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";

export const Navbar = () => {

	const {store, actions} = useContext(Context);
	const handleDeleteFavorite = (deleteFavIndex) => {
		actions.deleteFavorites(deleteFavIndex)
	};

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">StarWars Home</span>
			</Link>
			<div className="ml-auto">
				<ul className="navbar-nav me-5">
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle btn-lg" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</a>
						<ul className="dropdown-menu dropdown-menu-end " aria-labelledby="navbarDropdown">
							{store.favorites.map((favItem,index) => (
								<li key = {index}> 
									<div className="d-flex justify-content-between">
										<span className="dropdown-item">{favItem}</span>
										<button 
											className="btn btn-light"
											onClick={() => handleDeleteFavorite(index)}
										>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
											<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
											</svg>
										</button>
									</div>
								</li>
							))}
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	);
};
