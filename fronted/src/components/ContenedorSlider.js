import React from 'react';
import ReactDOM from 'react-dom';
import "../stylesheets/ContenedorSliderStyles.css";
import VisualizarInformacionDeEventos from './VisualizarInformacionDeEventosAdmin';
import NavbarAdmin from './NavbarAdmin';
import NavbarUser from './NavbarUser';
import VisualizarInformacionDeEventosAdmin from './VisualizarInformacionDeEventosAdmin';
import VisualizarInformacionDeEventosUser from './VisualizarInformacionDeEventosUser';
function ContenedorSlider(){
    return(
        <div className='containerSlider'>
            <NavbarAdmin/>
            <VisualizarInformacionDeEventosAdmin/>
            </div>
    )
}

export default ContenedorSlider;