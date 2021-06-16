import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Films from '../assets/json/charactersMCUcopy.json'



const DataFetching = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get(Films)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div className="articles">
            {post.map(item => {
                    <article className="article-item" id="article-template" key={item.id}>
                        <div className="image-wrap">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <h2>{item.title}</h2>
                        <span className="date">
                           {item.body}
                        </span>
                        <a href="#">Leer más</a>
                        <div className="clearfix"></div>
                    </article>
            })}
        </div>
    )
}
export default DataFetching;