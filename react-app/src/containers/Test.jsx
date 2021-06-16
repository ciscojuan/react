import React, { useEffect, useState } from "react";
import Films from '../assets/json/charactersMCUcopy.json';

const Test = () => {
    var id = props.match.params.id;
    return (
        <div className="articles">
            <h2 className="subheader">Últimos Peliculas</h2>
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
                            <a href="#">Leer más</a>
                            <div className="clearfix"></div>
                        </article>
                )
            })}
        </div>
    )
}
export default Test;
