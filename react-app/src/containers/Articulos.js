import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Global from '../Global';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';


class Articles extends Component {

    url = Global.url;

    state = {
        artcles: {},
        status: null
    }

    //dependiendo del prop que llegue va a cargar un metodo
    componentDidMount() {
        var home = this.props.home;     //variable para listar los 5 ultimos
        var search = this.props.search; //variable busqueda

        if(home){
            this.getLastArticles();

        }else if(search && search !== null && search !== undefined){
            this.getArticlesBySearch(search);

        }else{
            this.getArticles();
        }
    }

    getArticlesBySearch = (searched) => {

        axios.get(this.url + 'search/' + searched)
            .then(res => {
                
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
                console.log(this.state)

            })

            .catch( err =>{
                console.log(err.response.data)
            })
    }


    getArticles() {
        axios.get(this.url+"articles")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: "success"
                })
                console.log(this.state)
            })

    }


    getLastArticles() {
        axios.get(this.url+"articles/last")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: "success"
                })
                console.log(this.state)
            })

    }

    render() {
        if (this.state.articles ) {
            var listArticles = this.state.articles.map(article => {
                return (
                    <article className="article-item" key={article._id}>
                        <div className="image-wrap">
                            {
                                (article.image !== null)?(
                                    <img src={this.url+'get-image/'+article.image} alt={article.title} />
                                ) : (
                                    <img src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8" alt={article.title} />
                                )
                            }
                        </div>
                        <h2>{article.title}</h2>
                        <span className="date">
                          <Moment fromNow>{article.date}</Moment> 
                        </span>
                        <Link to={'/article/'+ article._id}>Leer más</Link>
                    </article>
                )
            });
            return(
                <div id="articles">
                    {listArticles}
                </div>
            )

        } else if(!this.state.articles && this.state.status === 'success') {
            return (
                <div id="content" className="articles">
                    <h1>No hay articulos para mostrar</h1>
                </div>
            );
        }else{
            return(
                <div id="articles">
                    <h2 className="subheader">Cargando...</h2>
                    <p>Espere mientras carga el contenido</p>
                </div>
            );
        }

    }
}
export default Articles;