import  Back  from  './imgs/back.png'
import Perfil from './imgs/381449146_855026732853899_5060554763201276869_n.jpg'
import './Header.modules.css'


export function Header() {

let button = document.querySelector('profile')

    return(
        <header>
            <div>
            <img src={Back} className='Back' />
            <div className='sub-cont'>
            <button> 
            <img src={Perfil} className='Perfil' />
            <div className='profile'>Olá Sou Bruno L Oliveira</div>
            </button>
            </div>
            </div>
        </header>
    );
}

