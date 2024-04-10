import { Botão } from '../../componentes_base/Bottton/botton';
import { Btx } from '../../componetes_Sobre/button_back/Text2';

import '../Como/como.css'

export function Page1(){
    return(
        <div>
            <Btx/>
            <div className='Game'>
            <Botão/>
            </div>
        </div>
    )
}