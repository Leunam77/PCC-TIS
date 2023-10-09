import React, {Component, useEffect} from 'react';
import {Link} from 'react-router-dom';

import NavbarUser from '../components/NavbarUser';
import TipoDeEvento from '../components/TipoDeEvento';
import ContenedorSlider from '../components/ContenedorSlider';
import NavbarAdmin from '../components/NavbarAdmin';
import Eventos from '../components/Eventos';
import ListaEventos from '../components/ListaEventos';

import NewsSide from '../components/NewsSide';

import '../App.css';
import axios from 'axios';


class Home_Admin extends Component{

    state = {
        events: [],
        loading:true,

    }

    async componenDidMount(){
        let res = await axios.get('http://127.0.0.1:8000/api/events').then(function (response) {
            console.log(response);
            
        });

        let data =res.data;

        console.log(data);


        if(res.data.status === 200){
            this.setState({

                events: res.data.events,
                loading: false, 

            });
        }
    }


    render(){

        var event_HTML ="";
        if(this.state.loading){
            event_HTML = <h1> Cargando</h1>

        }else{
            event_HTML =
            this.state.events.map((item) => {
                return (

                    <div key={item.id}>
                        {item.nombre_evento}
                        {item.requisitos}

                    </div>

                );

            })

        }
        return(


            <div className="App">
                <div className="background-image"></div> {/* Componente de fondo */}
                <div className="content">
                   <NavbarAdmin/>

                   <div className="contenedor">
                        <div className="columna1">
                            <div className='colSlider'>
                                <ContenedorSlider/>
                            </div>
                            <ListaEventos/>
                            <Eventos/>
                            <Eventos/>
                        </div>
                        <div>
                            Heyy
                            {event_HTML}
                        </div>


                        <div className="columna2">
                            Contenido de la Columna 2
                        </div>

                    </div>
                </div>
           </div>

           
        
            
        );
    }
}

export default Home_Admin;