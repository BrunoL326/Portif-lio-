import { useState } from 'react';
import './botton_bk.css'

export function Botão2(){

    const [ Active, DESLIGADO ] = useState(false)

    return(
        <div className='background11'>
            <div onClick={() => {DESLIGADO(!Active)}}>
                <div className="BTN2">Burguer King</div>
            </div>
            {Active && (       
        <div className="body_6">
            <div className="card_8">
                <div className="content_6" >
                    <p>Escravo</p>
                    <p>2020-2021</p>
                </div>
            </div>
        </div>
)}
        </div>
    )
}