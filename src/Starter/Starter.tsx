import Perfil from './EU2.jpg'
import { BiUserCircle }  from '@react-icons/all-files/bi/BiUserCircle'
import './Starter.css'

function Starter() {
    return(
        <div className='Background'>
             <img src={Perfil} className='Eu-2'/>
             <a className='Cont-1'>
            <BiUserCircle/>
             </a>
             
        </div>
        
    )
}

export default Starter