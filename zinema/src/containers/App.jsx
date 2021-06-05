import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Layout from '../components/Layout';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss'
import useTvShowsApi from '../hooks/useTvShowsApi';

const API = 'http://localhost:3001/initalState';
//      Hoock
const App = () => {
    const initialState = useTvShowsApi(API);
    return initialState.length === 0 ? <h1>Loading...</h1> : (
        <Layout>
            <Header />
            <Search />
            
            {initialState.mylist.length > 0 && (
                <Categories title="Mi lista">
                    <Carousel>
                        {initialState.mylist.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
            )}

            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platfix">
                <Carousel>
                    {initialState.originals.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>
            <Footer />
        </Layout>
    );
}

export default App;