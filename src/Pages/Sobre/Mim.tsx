

import { Space } from '../../componentes_base/Decrição/space';
import { TX_1 } from '../../componentes_base/Topo/Header_Sobre/heander';
import { Btx } from '../../componentes_base/BOTÕES/button_back/Text2';
import './Sobre.css'
import { Botão3 } from '../../componentes_base/BOTÕES/Botton_3/botton_hv';
import { Botão2 } from '../../componentes_base/BOTÕES/Botton_2/botton_BK';
import { Botão4 } from '../../componentes_base/BOTÕES/Botton_4/botton_Exe';
import { Botão5 } from '../../componentes_base/BOTÕES/Botton_5/botton_dev_free';
import { Botão6 } from '../../componentes_base/BOTÕES/Botton_6/botton_aux_adm';


export function Page2() {
    return(
    <div>
            
            <div className="Btx">
            <Btx/>
            </div>
            <div className="Title">
                EXPERIÊNCIAS 
            </div>
            <div className='Botão2'>
            <Botão2/>
            </div>
            <div className='Botão3'>
            <Botão3/>
            </div>
            <div className='Botão4'>
            <Botão4/>
            </div>
            <div className='Botão5'>
            <Botão5/>
            </div>
            <div className='Botão6'>
            <Botão6/>
            </div>
            <div>
            <Space/>
        </div>
    </div>
        )
}

