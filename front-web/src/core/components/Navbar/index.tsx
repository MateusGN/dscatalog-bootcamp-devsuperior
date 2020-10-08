import React from 'react'
import './style.scss'

const NavBar = () => {

    return (
        <nav className="row bg-primary main-nav">
            <div className="col-2">
                <a href="link" className="nav-logo-text">
                    <h4>DsCatalog</h4>
                </a>
            </div>
            <div className="col-6 offset-2">
                <ul className = "main-menu">
                    <li>
                        <a href='link' className="active">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href='link'>
                            CATÁLOGO
                        </a>
                    </li>
                    <li>
                        <a href='link'>
                            ADMIM
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default NavBar;