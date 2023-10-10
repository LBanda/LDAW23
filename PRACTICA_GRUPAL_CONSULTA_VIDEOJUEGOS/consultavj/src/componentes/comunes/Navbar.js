import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand"
                to="/videojuegos"
            >
                Consulta VJ
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
                        exact="true"
                        to="/videojuegos"
                    >
                        Videojuegos
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
                        exact="true"
                        to="/colleccion"
                    >
                        Mi Colección
                    </NavLink>
                    
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
                        exact="true"
                        to="/"
                    >
                        Salir
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}