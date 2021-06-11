import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Test from './components/Test';
import Articles from './components/Articles';
import SideBar from './components/sidebar';
import Footer from './components/Footer';
import './assets/css/styles.css';
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider title="Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es" />
      <div className="center">
        <section id="content">
          <h2 className="subheader">Últimos Peliculas</h2>
          <Articles />
          <Test />
        </section>
        
        <SideBar />
      </div>
      <div class="clearfix"></div>
      <Footer />
    </div>
  );
}

export default App;
