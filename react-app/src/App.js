import React from 'react';
import Router from './router'
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Slider from './components/Slider';
import SideBar from './components/sidebar';
import Footer from './components/Footer';
import './assets/css/styles.css';
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <div class="clearfix"></div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
