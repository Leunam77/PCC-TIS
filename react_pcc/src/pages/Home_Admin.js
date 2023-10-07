import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import NavbarUser from '../components/NavbarUser';
import TipoDeEvento from '../components/TipoDeEvento';
import ContenedorSlider from '../components/ContenedorSlider';
import NavbarAdmin from '../components/NavbarAdmin';
//import '../App.css';


class Home_Admin extends Component{
    render(){
        return(


            <div className="App">
                <div className="background-image"></div> {/* Componente de fondo */}
                <div className="content">
                   <NavbarAdmin/>
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
}

export default Home_Admin;