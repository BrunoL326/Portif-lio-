import { Botão1 } from '../../componentes_base/BOTÕES/Botton_1/botton';
import { Btx } from '../../componentes_base/BOTÕES/button_back/Text2';
import { Space } from '../../componentes_base/Decrição/space';

import '../Como/como.css'

export function Page1(){
    return(
        <div>
            <Btx/>
            <div className='Game'>
            <Botão1/>
            </div>
            <Space/>
        </div>
    )
}