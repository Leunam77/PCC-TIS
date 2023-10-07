import './App.css';
import NavbarUser from './components/NavbarUser';
import TipoDeEvento from './components/TipoDeEvento';
import ContenedorSlider from './components/ContenedorSlider';
import NewsSide from './components/NewsSide';
import ListaEventos from './components/ListaEventos';
import Eventos from './components/Eventos';

function App() {
  return (
    
    <div className="App">
      <div className="background-image"></div> {/* Componente de fondo */}
      <div className="content">
        <NavbarUser/>
        <div className="contenedor">
          <div className="columna1">
            <div className='colSlider'>
              <ContenedorSlider/>
            </div>
            <ListaEventos/>
            <Eventos/>
            <Eventos/>
            <Eventos/>
            <Eventos/>
          </div>
          <div className="columna2">
            <NewsSide/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
