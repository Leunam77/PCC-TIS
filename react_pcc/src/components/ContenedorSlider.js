import React from 'react';
import ReactDOM from 'react-dom';
import "../stylesheets/ContenedorSliderStyles.css";
import TipoDeEvento from './TipoDeEvento';

function ContenedorSlider(){
    return(
        <div className='containerSlider'>
            <TipoDeEvento/>
        </div>
    )
}

export default ContenedorSlider;