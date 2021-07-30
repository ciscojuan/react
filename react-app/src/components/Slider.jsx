import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Slider extends Component{
    render(){
        return (
        
            <div id="slider" className={this.props.className}>
                
                <h1>{this.props.title}</h1>
                {this.props.button &&
                    <NavLink to="#" className="btn-white">{this.props.button}</NavLink>
                }

                
            </div>
        )
    }
}
/* const Slider = () => {

    const [contador, setcontador] = useState(0)
    return (
        
        <div id="slider" className="slider-big">
            
            <h1>Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es</h1>
            <a href="#" className="btn-white">Ir al blog</a>
            <p>Contador: {contador}</p>
            <input value="Sumar" type="button"
                onClick={() => setcontador(contador + 1)} />
            <input value="Restar" type="button"
                onClick={() => setcontador(contador - 1)} />

        </div>
    )
} */
export default Slider;