import { useState } from 'react'
import  { Link } from 'react-router-dom';
import './Card.css';

export function Cards(){

    const [ Active, DESLIGADO ] = useState(false)

    return (
        <div className="costas">
    
            <div className='container'>
                <Link to='/Porque' className='botão b_3'>PORQUE</Link>
                
            </div>
              
            <div className='container'>
            <Link to='/Sobre' className='botão b_2'>SOBRE</Link>

            </div>
            
            <div className='container'>
            <div onClick={() => {DESLIGADO(!Active)}}>
                <div className='botão b_1'>COMO</div>
            </div>
        {Active && (       
        <div className="body_5">
            <div className="card_0">
                <div className="content_5" >
                    <p>Ao entender que, no futuro, eu seria um adulto, tomei uma decisão há muito tempo sobre quem eu seria e como seria. Eu queria mais do que tudo ter paz e minhas aventuras, então me dediquei totalmente a ser um funcionário exemplar onde quer que eu trabalhasse. Desde cedo, aprendi a mexer no computador de uma forma diferente de um usuário comum. Me matriculei em diversos cursos paralelos de administração e informática. Até que um amigo me deu a melhor indicação que já recebi. Além de me ensinar muito do que sabia, através do site da Rocketseat, obtive muitos resultados. Hoje em dia, já consigo criar desde sites até aplicativos completos e continuo me esforçando para me aperfeiçoar e alcançar cargos melhores.</p>
                    </div>
            </div>
        </div>
)};
        </div>
        </div>
    );
}
        
    