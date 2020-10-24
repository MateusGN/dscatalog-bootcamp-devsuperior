import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

const NavBar = () => {
    return (
        <nav className='admim-nav-container'>
            <ul>
                <li>
                    <NavLink to='/admim/produtos' exact className='admim-nav-item'>
                        Meus Produtos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/admim/categorias' exact className='admim-nav-item'>
                        Minhas Categorias
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/admim/usuarios' exact className='admim-nav-item'>
                        Meus Usuários
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;