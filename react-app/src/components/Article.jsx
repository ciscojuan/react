import React, { Component } from 'react';

class Article extends Component{

    render() {
        const { title, image} = this.props.film;
        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={title} />
                </div>

                <h2>{title}</h2>
                <span className="date">
                    Hace 5 minutos
                </span>

                <a href="#">Leer más</a>

                <div className="clearfix"></div>
            </article>
        );
    }
}

export default Article;