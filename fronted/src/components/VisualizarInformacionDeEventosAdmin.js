import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/VisualizarInformacionDeEventos.css'
import axios from 'axios';

function VisualizarInformacionDeEventosAdmin(){
    
    const [logos, setLogo] = useState([]);
    
    useEffect(() => {
        //Obtener Datos del logo
        axios.get('http://')
          .then((res) => {
            setLogo(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    return(
        <div className='visualizadorDeEventos'>
            <h1>Taller sobre capacitacion sobre lenguaje C#</h1>
            <div className='content'>
                <div className='logo'>
                    <tbody>
                        {logos.map((logo) => (
                        <tr>
                            key={logo.idlogo}
                            {logo.imglogo}
                        </tr>))}
                    </tbody>
                </div>
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