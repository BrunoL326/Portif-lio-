import { useState } from 'react';
import '../Botton_6/botton_aux_adm.css'

export function Botão6(){

    const [ Active, DESLIGADO ] = useState(false)

    return(
        <div className='background15'>
            <div onClick={() => {DESLIGADO(!Active)}}>
                <div className="BTN5">Auxiiar</div>
            </div>
            {Active && (       
        <div className="body_10">
            <div className="card_12">
                <div className="content_10" >
                    <p>Auxiliar Adm / TI </p>
                    <p>2023</p>
                </div>
            </div>
        </div>
)}
        </div>
    )
}