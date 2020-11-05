import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    let showMenu = '';
    menu ? showMenu = 'show' : showMenu = '';

    return (
        <div className='navbar'>
            <h1>PokemonDB</h1>
            <ul className={`navbar__list ${showMenu}`}>
                <li className='navbar__list-item' onClick={() => setMenu(false)}>
                    <Link to='/'>Карточки</Link>
                </li>
                <li className='navbar__list-item' onClick={() => setMenu(false)}>
                    <Link to='/list'>Список имен</Link>
                </li>
            </ul>

            <div className='mobile-menu' onClick={() => setMenu(!menu)}></div>
        </div>
    )
}

export default Navbar