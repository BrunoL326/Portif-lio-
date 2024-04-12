import { Btx } from '../../componentes_base/BOTÕES/button_back/Text2'
import { TX_1 } from '../../componentes_base/Topo/Header_Sobre/heander'
import { useState } from 'react';
import '../Porque/why.css'

export function Page3(){

    const [ Active, DESLIGADO ] = useState(false);

    return(
        <div>
            <Btx/>
            <div className="centro">
            <div onClick={() => {DESLIGADO(!Active)}}>
            <div className='TX1'>
                <TX_1 /></div>
               <div className="clique">Clique na imagem</div> 
            
            {Active && (       
        <div className="body_11">
        <div className="card_13">
            <div className="content_11" >
                    
                    <p>Em 2020, sofri uma perda muito grande na minha vida. No meu aniversário de 17 anos, um amigo de infância muito próximo veio a falecer por conta do câncer. Nesse dia, tive um pequeno vislumbre de que minha vida talvez não fosse tão fácil quanto eu achei que seria. Porém, a partir desse momento, tomei uma decisão em minha vida: me tornaria exatamente o que prometi para ele, um grande desenvolvedor, e viveria minha vida sempre atrás da felicidade e da paz. Tudo que busco é crescer muito e alcançar estabilidade da felicidade em minha própria vida. Todos têm perdas, preocupações e problemas, mas o que realmente sempre nos muda é como deixamos isso nos afetar. Então, esta promessa feita entre amigos hoje em dia é meu foco principal e me fará chegar cada vez mais longe.</p>
                </div>
            </div>
        </div>
)}
</div>
        </div>
        </div>
    )
}