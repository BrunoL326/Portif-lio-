import { useState } from 'react';
import '../Botton_4/botton_Exe.css'

export function Botão4(){

    const [ Active, DESLIGADO ] = useState(false)

    return(
        <div className='background13'>
            <div onClick={() => {DESLIGADO(!Active)}}>
                <div className="BTN4">Exercito </div>
            </div>
            {Active && (       
        <div className="body_8">
            <div className="card_10">
                <div className="content_8" >
                    <p>Soldado</p>
                    <p>2022-2023</p>
                </div>
            </div>
        </div>
)}
        </div>
    )
}
