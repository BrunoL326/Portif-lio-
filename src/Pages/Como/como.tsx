import { Botão1 } from '../../componentes_base/Botton_1/botton';
import { Btx } from '../../componetes_Sobre/button_back/Text2';

import '../Como/como.css'

export function Page1(){
    return(
        <div>
            <Btx/>
            <div className='Game'>
            <Botão1/>
            </div>
        </div>
    )
}