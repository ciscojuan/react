import React, { Component } from 'react';
import Moment from 'react-moment'; //->moment para formatear fechas
import 'moment/locale/es';
import swal from 'sweetalert';
import Global from '../Global';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
class Article extends Component {

  //cargar la ruta de nuestro api
  url = Global.url;

  //
  state = {
    article: false,
    status: null
  }

  //Cargar el metodo getArticle cuando se cargue el componente Article
  componentDidMount() {
    this.getArticle();
  }

  getArticle() {
    //Recojer el id
    var id = this.props.match.params.id;
    //hacer peticion al api
    axios.get(this.url + 'article/' + id)
      //capturar la respuesta
      .then(res => {
        this.setState({
          article: res.data.article,
          status: 'success'
        })
      })
  }
  //Metodo deleted
  deleteArticle = (id) => {

    swal({
      title: '¿Estas seguro?',
      text: 'Una vez Eliminado, no podras ser capaz de recuperarlo',
      icon: 'warning',
      buttons: true,
      dagerMode: true
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(this.url + 'delete/' + id)
            .then(res => {
              this.setState({
                article: res.data.article,
                status: 'success'
              })
              swal(
                'Articulo Borrado',
                'El articulo se ha borrado con exito!',
                'success'
              )
              console.log(this.state.article.status)
            })
        } else {
          swal(
            'No te preocupes',
            'No se ha borrado nada'
          )
        }
      })

  }
  render() {
    var article = this.state.article;

    if (this.state.article.status === 'success') {
      return (<Redirect to="/articles" />)
    }
    return (
      <>

        <div className="center">
          <section id="content">

            {this.state.article &&

              <article className="article-item article-detail">
                <div className="image-wrap">
                  <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                </div>

                <h1 className="subheader">{article.title}</h1>
                <span className="date">
                  <Moment locale="es" fromNow>{article.date}</Moment>
                </span>
                <h3>Autor: </h3>

                <p>{article.author}</p>

                <h3>Detalles:</h3>
                <p>
                  {article.content}
                </p>
                <input type="button" value="Editar" className="btn btn-danger btn-lg" />
                <input type="button" value="Eliminar" className="btn btn-warning btn-lg"
                onClick={
                  () => {
                    this.deleteArticle(article._id)
                   }
                  } />
                <div className="clearfix"></div>
              </article>
            }

            {
              !this.state.article &&
              <article className="article-item article-detail">

                <h1 className="subheader"> El Articulo No existe</h1>
                <p>Intenlo de nuevo mas tarde !!!</p>

              </article>
            }

          </section>
        </div>
      </>
    )
  }
}
export default Article;
