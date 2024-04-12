import { useState } from 'react';
import '../Botton_3/botton_hv.css'

export function Botão3(){

    const [ Active, DESLIGADO ] = useState(false)

    return(
        <div className='background12'>
            <div onClick={() => {DESLIGADO(!Active)}}>
                <div className="BTN3">Havaianas</div>
            </div>
            {Active && (       
        <div className="body_7">
            <div className="card_9">
                <div className="content_7" >
                    <p>Estoquista</p>
                    <p>2021-2022</p>
                </div>
            </div>
        </div>
)}
        </div>
    )
}
