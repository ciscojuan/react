import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss'
import useInitialState from '../hooks/useInitialState';

//const API = 'http://localhost:3001/initalState';
//      Hoock
const Home = ({myList, trends, originals}) => {
//    const initialState = useInitialState(API);
    return /*initialState.length === 0 ? <h1>Loading...</h1> :*/ (

            <>
            <Search />
            
            {myList.length > 0 && (
                <Categories title="Mi lista">
                    <Carousel>
                        {myList.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
            )}

            <Categories title="Tendencias">
                <Carousel>
                    {trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platfix">
                <Carousel>
                    {originals.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

        </>
    );
}

//export default Home;

const mapStateToProps = state =>{
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    };
};

export default connect(mapStateToProps,null)(Home);