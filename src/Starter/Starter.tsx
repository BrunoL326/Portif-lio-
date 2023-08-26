import Perfil from './EU2.jpg'
import { BiUserCircle }  from '@react-icons/all-files/bi/BiUserCircle'
import  { Link } from 'react-router-dom';
import './Starter.css'

function Starter() {
    return(
        <div className='Background'>
            <div className='perf-1'>
                <img src={Perfil} className='Eu-2'/>
            </div>
            <div className='Content-1'>
            <Link to='/Home'>
                <a className='Container-1'>
                <BiUserCircle/>
             </a>
             </Link>
             </div>
        </div>
    )
}

export default Starter