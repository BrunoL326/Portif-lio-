import Ft1 from './Começo.jpg'
import Ft2 from './Exercito.jpg'
import Ft3 from './Estudo.jpg'
import './fotos.css'

export function Fotos(){
    return (
        <div className='mobile'>
            <div className="imagens">
            <div className="items-wrapper">
            <div className="items"> 
            <div className="escolha">MINHA ESCOLHA</div>
            <img src={Ft1} className='item_1'/>
            <img src={Ft2} className='item_2'/>
            <img src={Ft3} className='item_3'/>
                </div>
             </div>
            </div>
        </div>
    )
}