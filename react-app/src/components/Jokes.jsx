import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/chuck.png';
import { decode } from 'he';

const Jokes = () => {

    const [joke, setJoke] = useState('');

    const fetchJoke = async signal => {
        const url = new URL('https://api.icndb.com/jokes/random');
        const response = await fetch(url, { signal });
        const { value } = await response.json();

        setJoke(decode(value.joke));
    };

    useEffect(() => {
        if (!joke) {
            const controller = new AbortController();
            fetchJoke(controller.signal);

            return () => controller.abort();
        }
    }, [joke]);

    return (
        <>
            <div className="container">
                <img src={Logo} alt="Chuch.Noris" />
                <p className="display-5">{joke || '...'}</p>

                <button className="btn btn-outline-info" onClick={() => setJoke('')}>
                    Get a new joke
                </button>
            </div>
        </>
    )
}
export default Jokes;