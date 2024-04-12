import { useState } from 'react';
import '../Botton_5/botton_dev_free.css'

export function Botão5(){

    const [ Active, DESLIGADO ] = useState(false)

    return(
        <div className='background14'>
            <div onClick={() => {DESLIGADO(!Active)}}>
                <div className="BTN5">Programador</div>
            </div>
            {Active && (       
        <div className="body_9">
            <div className="card_11">
                <div className="content_9" >
                    <p>Dev back-end</p>
                    <p>2023</p>
                </div>
            </div>
        </div>
)}
        </div>
    )
}