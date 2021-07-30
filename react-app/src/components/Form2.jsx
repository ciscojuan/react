import React, { Component } from 'react';
import { Redirect } from 'react-router';
import SimpleReactValidator from 'simple-react-validator'; //-> validar campos
import SideBar from './sidebar';
import swal from 'sweetalert';
import axios from 'axios';
import Global from '../Global';

class Form2 extends Component {


    url = Global.url;

    titleRef = React.createRef();
    contentRef = React.createRef();
    authorRef = React.createRef();

    constructor(props) {

        super(props);

        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido  '
            }
        });

    }
    //Definimos el estado del articulo
    state = {
        article: {},
        status: null,
        selectedFile: null
    }
    //actualiza el state con los datos de los campos
    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                author: this.authorRef.current.value,
                content: this.contentRef.current.value
            }
        })
        this.validator.showMessages();
        this.forceUpdate();
    }

    fileChange = (e) => {
        //Actualizar el state con el campo file
        this.setState({
            selectedFile: e.target.files[0]
        })

        console.log(this.state.selectedFile);

    }
    saveArticle = (e) => {
        e.preventDefault();

        console.log("Formulario enviado ...")
        console.log('Title: ' + this.titleRef.current.value);
        console.log('Author: ' + this.titleRef.current.value);
        console.log('Content: ' + this.titleRef.current.value);
        //Rellenar el state co los campos del formulario
        this.changeState();
        //hacer una peticion por http por post para guardar el articulo
        if (this.validator.allValid()) {
            axios.post(this.url + 'save', this.state.article)
                .then(res => {
                    if (res.data.article) {
                        this.setState({

                            article: res.data.article,
                            status: 'waiting ...'
                        });

                        //swall
                        swal(
                            'Articulo Creado !!!',
                            'El articulo se ha creado correctamente',
                            'success'

                        )
                        //subir Imagen
                        if (this.state.selectedFile !== null) {
                            //capturar el id del articulo
                            var articleId = this.state.article._id;
                            //Crear formData y añadir fichero
                            const formData = new FormData();

                            formData.append(
                                'image',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            )
                            //peticion ajax
                            axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success'
                                        });
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed '
                                        });
                                    }//end Else
                                })
                        } else {
                            this.setState({
                                status: 'success'
                            });
                        }//end else subir imagen

                    } else {
                        this.setState({

                            status: 'failed'
                        });
                    }//end else saveArticle
                })
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        if (this.state.status === 'success' || this.state.status === 'wating') {
            return (<Redirect to='/articles' />)
        }
        return (
            <>

                <div className="center">
                    <section id="content">
                        <br />
                        <h1 className="subheader">Crear Articulo</h1>
                        <form className="mid-form" onSubmit={this.saveArticle}>
                            <div className="form-group">
                                <label htmlFor="title">Titulo </label>
                                <input type="text" name="title" placeholder="Titulo de la Pelicula" className="form-control from-control-lg" ref={this.titleRef} onChange={this.changeState} />
                               <div className="text-danger">{this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}</div> 
                            </div>

                            <div className="form-group">
                                <label htmlFor="author">Autor </label>
                                <input type="text" name="author" placeholder="Autor de la Pelicula" className="form-control from-control-lg" ref={this.authorRef} onChange={this.changeState} />
                                <div className="text-danger">{this.validator.message('author', this.state.article.author, 'required|alpha_num_space')}</div> 
                            </div>

                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea name="content" className="form-control form-control-lg" ref={this.contentRef} onChange={this.changeState}></textarea>
                                <div className="text-danger">{this.validator.message('content', this.state.article.content, 'required')}</div> 
                            </div>

                            <div className="form-group">
                                <label htmlFor="image">Imagen</label>
                                <input type="file" name="image" onChange={this.fileChange} />
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-lg btn-outline-success" />

                        </form>

                    </section>

                </div>
                <SideBar visible="false" />
            </>
        )
    }

}
export default Form2;