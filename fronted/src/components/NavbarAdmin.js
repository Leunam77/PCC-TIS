import React from 'react';
import ReactDOM from 'react-dom';
import "../stylesheets/NavbarStyles.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
function NavbarAdmin(){
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
                <li><a href=''> Reportes <FontAwesomeIcon icon={faCaretDown} /></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarAdmin;