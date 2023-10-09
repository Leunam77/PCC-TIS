import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/VisualizarInformacionDeEventos.css'
function VisualizarInformacionDeEventosAdmin(){
    return(
        <div className='visualizadorDeEventos'>
            <h1>Taller sobre capacitacion sobre lenguaje C#</h1>
            <div className='content'>
                <div className='logo'>logo</div>
                <div className='informacion'>
                    <div className='descripcion'>Este taller contendra diferentes </div>
                    <div className='requerimientos'>req</div>
                </div>
                <div className='patOrg'>
                    <div className='inscripciones'>inscripciones cerradas</div>
                    <div className='Patrocinadores'>
                        <table>
                            <thead><tr><th>Patrocinadores</th></tr></thead>
                            <tbody><tr><td></td></tr></tbody>
                        </table>
                        
                    </div>
                    <div className='Organizadores'>
                        <table>
                            <thead><tr><th>Organizadores</th></tr></thead>
                            <tbody><tr><td></td></tr></tbody>
                        </table>
                    </div>
                </div>
                
            </div>
            <div className='buttons'>
                <button className='miButtonEdit'>Editar</button>
                <button className='miButtonVer'>Ver Lista de Participantes</button>
            </div>
        </div>
    )
}

export default VisualizarInformacionDeEventosAdmin;