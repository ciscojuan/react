import React, { Component } from 'react';
import Article from '../components/Article';
import Slider from '../components/Slider';
import SideBar from '../components/sidebar';

class Articles extends Component {
    state = {
        peliculas: [
            { title: "Capitan America: El primer vengador", image: "https://wallpaperaccess.com/full/1826377.jpg" },
            { title: "Capitan America: The Winter Soldier", image: "https://wallpapercave.com/wp/wp1820128.jpg" },
            { title: "Capitan America: Civil War", image: "https://i.pinimg.com/originals/a9/71/bb/a971bbac757943386c10ec9c2d98e9e5.jpg" },
            { title: "Thor", image: "https://images3.alphacoders.com/674/674048.jpg" },
            { title: "Thor: Un Mundo Oscuro", image: "https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/20316.jpg" },
            { title: "Thor: Love & Thunder", image: "https://data.1freewallpapers.com/download/lady-thor-love-and-thunder-4k.jpg" }
        ],
        nombre: "Juan Pablo Ramirez"
    };

    render() {

        return (
  <>
        <Slider title="Bienvenido a Peliculas del MCU" 
                className="slider-small"/>

            <div className="center">
                <section id="content">
                <h2 className="subheader">Últimos Peliculas</h2>
                <div id="articles">
                {
                    this.state.peliculas.map((film, i) => {
                        return (
                            <Article 
                            key={i} 
                            film={film} 
                            />
                        )

                    })
                }
                        
            </div>
                </section>
                <SideBar 
                visible="true"/>
            </div>
</>


        )
    }
}

export default Articles;