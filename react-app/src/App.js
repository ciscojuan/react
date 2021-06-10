import Header from './components/Header';
import Slider from './components/Slider';
import Articles from './components/Articles';
import SideBar from './components/sidebar';
import Footer from './components/Footer';
import './assets/css/styles.css';
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <div className="center">
        <section id="content">
          <h2 className="subheader">Últimos artículos</h2>
          <Articles />
        </section>
        <SideBar />
      </div>
      <div class="clearfix"></div>
      <Footer />
    </div>
  );
}

export default App;
