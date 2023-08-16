import { FaReact } from 'react-icons/fa'
import  Back  from  './imgs/back.png'
import Perfil from './imgs/perfil.jpg'

import './Header.modules.css'


export function Header() {
    return(
        <header>
            <div className='react-1'>
            <FaReact />
            </div>
            <div className='react-2'>
            <FaReact />
            </div>
            <div>
            <img src={Back} className='Back' />
            <img src={Perfil} className='Perfil' />
            <div className='shadow-perfil'></div>
            </div>
        </header>
    );
}