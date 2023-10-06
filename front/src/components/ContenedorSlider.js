import React from 'react';
import ReactDOM from 'react-dom';
import "../stylesheets/ContenedorSliderStyles.css";
import VisualizarInformacionDeEventos from './VisualizarInformacionDeEventos';
import NavbarAdmin from './NavbarAdmin';
import NavbarUser from './NavbarUser';
function ContenedorSlider(){
    return(
        <div className='containerSlider'>
            <NavbarAdmin/>
            <VisualizarInformacionDeEventos/>
        </div>
    )
}

export default ContenedorSlider;