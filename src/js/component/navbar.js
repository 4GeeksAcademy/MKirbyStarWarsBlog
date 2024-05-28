import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const handleDeleteFavorite = (deletedItem) => {
        actions.deleteFavorite(deletedItem);
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/">
                    <img src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG39.png" className="img-fluid" style={{ height: 100 }} alt="Star Wars Logo" />
                </Link>
                <div className="ml-auto mx-3">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle bg-danger text-black btn-lg" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Favorites
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end bg-info" aria-labelledby="navbarDropdown">
                                {store.favorites.map((favitem, index) => (
                                    <li key={index}>
                                        <div className="d-flex justify-content-between">
                                            <span className="dropdown-item">{favitem}</span>
                                            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteFavorite(favitem)}>Delete</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
