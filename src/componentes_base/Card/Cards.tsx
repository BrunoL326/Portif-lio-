import  { Link } from 'react-router-dom';
import './Card.css';

export function Cards(){
    return (
        <div className="costas">
    
            <div className='container'>
                <Link to='/Porque' className='botão b_3'>Porque</Link>
                
            </div>
              
            <div className='container'>
            <Link to='/Sobre' className='botão b_2'>Sobre</Link>

            </div>
            
            <div className='container'>
                <Link to='/Como' className='botão b_1'>Como</Link>
            </div>
            
         </div>
            
    )
}

export default Cards