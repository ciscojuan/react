import React from 'react';
import Router from './router'
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

import './assets/css/styles.css';
import './assets/css/App.css';
import Admin from './components/Admin';

function App() {
  const sujeto = {
    nombre: "Juan Pablo Ramirez",
    email: "ciscojuan@gmail.com",
    image: "https://via.placeholder.com/64"
}
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <div className="clearfix"></div>
        <Footer sujeto={sujeto}/>
        <Admin />
      </BrowserRouter>
    </div>
  );
}

export default App;
