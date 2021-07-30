import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class SideBar extends Component {

    render() {


        return (
            <>
            {this.props.visible === "true" &&
            <aside id="sidebar">
                
                    <div id="nav-blog" className="sidebar-item">
                        <h3>Puedes hacer esto</h3>
                        <Link to="/create" className="btn btn-success">Crear artículo</Link>
                    </div>
                


                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el artículo que buscas</p>
                    <form >
                        <input type="text" name="search"/>
                        <input type="submit" name="submit" value="Buscar" className="btn-black" />
                    </form>
                </div>
                
            </aside>
            }
            </>
        )
    }
    
}
export default SideBar;