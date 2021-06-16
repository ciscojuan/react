import React from 'react';
import Slider from '../components/Slider';
import SideBar from '../components/sidebar';

const Home = () => {
    return (
        <>
            <Slider title="Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
                button="Blog" />
            <div className="center">
                <section id="content">
                </section>
                <SideBar 
                />
            </div>

        </>
    )
}

export default Home;