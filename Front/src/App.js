import './App.css';
import NavbarUser from './components/NavbarUser';
import TipoDeEvento from './components/TipoDeEvento';
import ContenedorSlider from './components/ContenedorSlider';

function App() {
  return (
    
    <div className="App">
      <div className="background-image"></div> {/* Componente de fondo */}
      <div className="content">
        <NavbarUser/>
        <div class="contenedor">
          <div class="columna1">
            <ContenedorSlider/>
          </div>
          <div class="columna2">
              Contenido de la Columna 2
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
