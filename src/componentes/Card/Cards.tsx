import  { Link } from 'react-router-dom';
import './Card.css';


export function Cards(){

    return (
        <div className="costas">
    
            <div className='container'>
                <div className='botão b_3'>Por Que</div>
            </div>
              
      
            <div className='container'>
                <div className='botão b_2'>Como</div>
            </div>
            <div className='container'>
                <Link to='/Sobre'>
                    <div className='botão b_1'>Sobre</div>
                    </Link>
            </div>
            
         </div>
            
    )
}

export default Cards