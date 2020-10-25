import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

const NavBar = () => {
    return (
        <nav className='admim-nav-container'>
            <ul>
                <li>
                    <NavLink to='/admim/products' exact className='admim-nav-item'>
                        Meus Produtos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/admim/categories' exact className='admim-nav-item'>
                        Minhas Categorias
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/admim/users' exact className='admim-nav-item'>
                        Meus Usuários
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;