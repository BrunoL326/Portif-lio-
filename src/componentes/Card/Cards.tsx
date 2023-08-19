import  { Link } from 'react-router-dom';
import './Card.css';


export function Cards(){

    return (
        <div className="costas">
    
            <div className='container'>
                <a className='botão b_3'>Por Que</a>
            </div>
              
            <div className='container'>
                <a className='botão b_2'>Como</a>
            </div>
            
            <div className='container'>
                <Link to='/Sobre'>
                    <a className='botão b_1'>Sobre</a>
                    </Link>
            </div>
            
         </div>
            
    )
}

export default Cards