import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './Card.css';
import Changes from '../../Sobre/Mim';

export function Cards(){

    return (
        <div className="costas">
            <Router>
                <Routes>
                    <Route path="/" >
            <div className='container'>
                <div className='botão b_3'>Por Que</div>
            </div>
                    </Route>    
                </Routes>
            </Router>
            <div className='container'>
                <div className='botão b_2'>Como</div>
            </div>
            <div className='container'>
                <div className='botão b_1'>Sobre</div>
            </div>
            
         </div>
            
    )
}