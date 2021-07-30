import React,{useState, useEffect} from 'react';
import axios from 'axios';


const ArticlesHooks = () => {

    const[articles, setArticles]=useState([]);

        useEffect(()=>{
            getArticles();
    },[]);

    const getArticles = async() => {
/*         const data = await fetch('https://localhost:3010/api/articles'); */
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await data.json();

        setArticles(users);
    }

  return(
    <div id="content">
        <h1>Lista de Articulos:</h1>
        <ul>
        {
            articles.map(item =>(
                <li key={item.id}>{item.name}</li>
            ))
        }
        </ul>
    </div>
  )
}
export default ArticlesHooks;