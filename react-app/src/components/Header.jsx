import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../assets/images/react.svg';

const Header = () => {
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
                            <a href="index.html"><NavLink to="/home" exact activeClassName="active">Inicio</NavLink></a>
                        </li>
                        <li>
                            <a href="blog.html"><NavLink to="films" exact activeClassName="active">Peliculas MCU</NavLink></a>
                        </li>
                        <li>
                            <a href="formulario.html"><NavLink to="characters" exact activeClassName="active">Personajes MCU</NavLink></a>
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