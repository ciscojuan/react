import React from 'react';
import Slider from '../components/Slider';
import Articulos from './Articulos';
import SideBar from '../components/sidebar';
const Articles = () => {
    return (
        <>
            <Slider title="Bienvenido a Peliculas del MCU"
                className="slider-small" />
            <div className="center">
                <section id="content">
                    <br />
                    <h2 className="subheader">Últimas Peliculas</h2>

                    <div id="articles">
                        <Articulos />
                    </div>
                </section>
            </div>
            <SideBar visible="true"/>
        </>
    )
}
export default Articles;