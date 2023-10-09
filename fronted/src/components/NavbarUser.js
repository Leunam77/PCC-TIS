import React, {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import "../stylesheets/NavbarStyles.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown,faPaperPlane,faBell, faUser} from '@fortawesome/free-solid-svg-icons'


function NavbarUser(){
    return(
        <nav>
            <div className='logoName'> 
            <h1 className='name'>
                PCC
            </h1>
            <a href=''>   
                <img className='imageNav' src = {require('../images/Logopng.png')} alt='Logo del sistema'/>
            </a>
            </div> 
            <div>
                <ul id='navbar'>
                <li><a href=''><FontAwesomeIcon icon={faPaperPlane} /></a></li>
                <li><a href=''><FontAwesomeIcon icon={faBell} /></a></li>
                <li><a href=''> Mis eventos</a></li>
                <li><a href=''><FontAwesomeIcon icon={faUser} /></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarUser;