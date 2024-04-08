import  Back  from  './imgs/back.png'
import Perfil from './imgs/381449146_855026732853899_5060554763201276869_n.jpg'
import './Header.modules.css'


export function Header() {

    return(
        <header>
            <div>
            <img src={Back} className='Back' />
            <div className='sub-cont'>
            <img src={Perfil} className='Perfil' />
            <button> 
            <div className='profile'>Olá sou Bruno, quer saber mais ? </div>
            </button>
            </div>
            </div>
        </header>
    );
}

