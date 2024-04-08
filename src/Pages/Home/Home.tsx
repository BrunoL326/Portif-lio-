import { Header } from '../../componentes_base/Topo/Header_Home/header';
import { Icons } from '../../componentes_base/TechIcons/Icons';
import { Cards } from '../../componentes_base/Card/Cards';
import { Space } from '../../componentes_base/Decrição/space';
import { Btx2 } from '../../componetes_Sobre/button_back/Text2'

function Home() {
    return(
        <div className="Pag1">
            <div className='TOP'>
    <Btx2/>
    <Header/>
    </div>
    <Icons/>
    
    <Cards/>

     <div className='Botton'>
        
    <Space/>
    </div>
        </div>
    )
}

export default Home