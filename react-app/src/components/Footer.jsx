import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Footer = () => {

    const logout=() => {
        localStorage.clear();
        console.log("cliasdk");
        return(
            <Redirect to="/articles/"/>
        )
      }
    const local = () => {
        if (localStorage.getItem('auth') === 'true') {

            return (<button onClick={logout} className="btn btn-info">LogOut</button>)
        }
    }

    return (

        <footer id="footer">
            
            <div className="center">
                <p>&copy; Máster en frameworks para JavaScript de &copy;CODMW3<span className="badge bg-info text-dark"><Link to="/admin">Admin side</Link></span> </p>

                {local()}
            </div>
        </footer>
    )
}

export default Footer;