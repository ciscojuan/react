import React from 'react';
import Slider from '../components/Slider';
import SideBar from '../components/sidebar';
import Articulos from './Articulos';

const Home = () => {

    return (
        <>
            <Slider title="Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
                button="Blog" />
            <div className="center">
                <section id="content">
                    <h1>Ultimos Articulos</h1>
                    <Articulos home={true} />
                </section>
            </div>
            <SideBar visible="true"/>
        </>
    )
}

export default Home;