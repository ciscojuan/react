import React, { Component } from 'react';
import Slider from '../components/Slider';
import SideBar from '../components/sidebar';

class Form extends Component {

    title = React.createRef();
    author = React.createRef();
    content = React.createRef();

    state={
        user: {}
    }

    recibirFormulario = (e) => {
        e.preventDefault();
        var user = {
            nombre: this.title.current.value,
            author: this.author.current.value,
            contenido: this.content.current.value
        }

        this.setState({
            user: user
        })


        console.log(user);
    }

    render() {
        if (this.state.user.nombre) {
            var nombre = this.state.user.nombre;
        }
        if (this.state.user.author) {
            var author = this.state.user.author;
        }
        if (this.state.user.contenido) {
            var contenido = this.state.user.contenido;
        }
        return (

            <div className="center">
                <section id="content">

                    <h1 className="subheader">Formulario</h1>

                    {nombre &&
                        <div>
                            <p>Nombre: <strong>{nombre}</strong></p>
                            <p>Author: <strong>{author}</strong></p>
                            <p>Contenido: <strong>{contenido}</strong></p>
                        </div>
                    }
                    <form className="mid-form" onSubmit={this.recibirFormulario}>
                        <div className="form-group">
                            <label htmlFor="title">Titulo </label>
                            <input type="text" name="title" ref={this.title} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="author">Author</label>
                            <input type="text" name="author" ref={this.author} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Descripcion</label>
                            <textarea name="content" ref={this.content}></textarea>
                        </div>

                        <div className="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre" /> Hombre
                            <input type="radio" name="genero" value="mujer" /> Mujer
                            <input type="radio" name="genero" value="otro" /> Otro
                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Enviar" className="btn btn-success" />

                    </form>

                </section>
                <SideBar
                />
            </div>
        )
    }
}

export default Form;