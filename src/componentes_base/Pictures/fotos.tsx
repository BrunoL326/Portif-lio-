import Ft1 from './Exercito.jpg'
import Ft2 from './6b0757097a65283d77fd5fc5c536018a6ef31da2r1-736-736v2_uhq.jpg'
import Ft3 from './Darth-Vader-Wallpaper-45-1280x720-1.jpg'
import './fotos.css'

export function Fotos(){
    return (
        <div className='mobile'>
            <div className="imagens">
            <div className="items-wrapper">
            <div className="items">
            <img src={Ft1} className='item_1'/>
            <img src={Ft2} className='item_2'/>
            <img src={Ft3} className='item_3'/>
                </div>
             </div>
            </div>
        </div>
    )
}