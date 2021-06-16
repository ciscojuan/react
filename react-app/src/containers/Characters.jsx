import React from "react";
import Slider from "../components/Slider";
import SideBar from "../components/sidebar";
import Films from '../assets/json/charactersMCUcopy.json';


const Test = (props) => {
    var id = props.match.params.id;
    return (
        <>
            <Slider title="Bienvenido a Peliculas del MCU"
                className="slider-small" />
            <div className="center">
                <section id="content">
                    <h2 className="subheader">Últimos Peliculas</h2>
                    <div id="articles">
                        {Films.map(item => {
                            return (
                                <article className="article-item" id="article-template" key={item.id}>
                                    <div className="image-wrap">
                                        <img src={item.image} alt={item.hero} />
                                    </div>
                                    <h2>{item.hero}</h2>
                                    <span className="date">
                                        Hace 5 minutos
                                    </span>
                                    <a href="#">{id}</a>
                                    <div className="clearfix"></div>
                                </article>
                            )
                        })}
                    </div>
                </section>
                {console.log(id)}
                <SideBar 
                visible ="true"/>

            </div>
        </>
    )
}
export default Test;
