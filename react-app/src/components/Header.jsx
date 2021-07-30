import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../assets/images/react.svg';

const Header = (props) => {

    return (
        <header id="header">
            <div className="center">
                {/* LOGO */}
                <div id="logo">
                    <img src={Logo} className="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>Curso de React</strong>
                    </span>
                </div>

                {/* MENU -->*/}
                <nav id="menu">
                    <ul>
                        <li>
                            <NavLink to="/home" exact activeClassName="active">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/articles" exact activeClassName="active">Peliculas MCU</NavLink>
                        </li>

                    </ul>
                </nav>
                {/*LIMPIAR FLOTADOS*/}
                <div className="clearfix"></div>
            </div>
        </header>
    )
}
export default Header;