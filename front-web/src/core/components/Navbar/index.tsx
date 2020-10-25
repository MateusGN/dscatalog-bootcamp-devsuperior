import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './style.scss'

const NavBar = () => {

    return (
        <nav className="row bg-primary main-nav">
            <div className="col-2">
                <Link to="/" className="nav-logo-text">
                    <h4>DsCatalog</h4>
                </Link>
            </div>
            <div className="col-6 offset-2">
                <ul className = "main-menu">
                    <li>
                        <NavLink to='/' exact>
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/products'exact>
                            CATÁLOGO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/admim' exact>
                            ADMIM
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default NavBar;