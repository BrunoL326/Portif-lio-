import  { Link } from 'react-router-dom';
import './Card.css';

export function Cards(){
    return (
        <div className="costas">
    
            <div className='container'>
                <a className='botão b_3'>Porque</a>
                
            </div>
              
            <div className='container'>
            <Link to='/Sobre' className='botão b_2'>Sobre</Link>

            </div>
            
            <div className='container'>
                <a className='botão b_1'>
                    Como
                    </a>
            </div>
            
         </div>
            
    )
}

export default Cards