import React, {Component} from 'react';
import Slider from './Slider';
import Articulos from '../containers/Articulos';
import SideBar from './sidebar';


class Search extends Component {

    
    render(){
       
        var searched = this.props.match.params.search;
        return (
            <>
                <Slider title={'Resultados para: '+ searched}
                    className="slider-small" />
                <div className="center">
                    <section id="content">

    
                        <div id="articles">
                            <Articulos search={searched}/>
                        </div>
                    </section>
                    <SideBar
                        visible="false" />
                </div>
            </>
        )
    }
    
}
export default Search;