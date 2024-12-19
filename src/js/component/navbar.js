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
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<ul className="navbar-nav">
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
											className="btn btn-primary"
											onClick={() => handleDeleteFavorite(index)}
										>Delete</button>
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
