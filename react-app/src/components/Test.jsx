import React, {Component} from 'react';

class Test extends Component {

    constructor (props){
        super(props);

        this.state = {
            count: 0
        }
    }
     
    render(){

        return(
            <>
            <h1>Hola Mundo !!!, you've clicked {this.state.count} times.</h1>
            
            <button onClick={ () => this.setState({ count: this.state.count + 1})} id="increase">Aumentar contador</button>
            <button onClick={ () => this.setState({ count: this.state.count - 1})} id="decrease">Disminuir contador</button>
            </>
        )
    }
}
export default Test;