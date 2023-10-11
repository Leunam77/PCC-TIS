import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/VisualizarInformacionDeEventos.css'
import axios from 'axios';

function VisualizarInformacionDeEventosAdmin(){
    
    const [logos, setLogo] = useState([]);
    const [eventos, setEvento] = useState([]);
    useEffect(() => {
        //Obtener Datos del logo  http://localhost:5000/logo/
        axios.get('http://')
          .then((res) => {
            setLogo(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      useEffect(() => {
        //Obtener Datos de la descripcion requerimientos y nombre del evento
         axios.get('http://')
          .then((res) => {
            setEvento(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    return(
        <div className='visualizadorDeEventos'>
            {eventos.map((evento) => (
                <h1>
                    {evento.nombre_Evento}
                </h1>
                ))}

            <div className='content'>
                {logos.map((logo) => (
                <div className='logo'>
                    {logo.imglogo}
                </div>
                ))}
                {eventos.map((evento) => (
                <div className='informacion'>
                    <div className='descripcion'>
                        {evento.descripcion_Evento}
                    </div>
                    <div className='requerimientos'>
                        {evento.descripcion_Evento}
                    </div>
                </div>
            ))}
            
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