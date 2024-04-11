import { Header } from '../../componentes_base/Topo/Header_Home/header';
import { Icons } from '../../componentes_base/TechIcons/Icons';
import { Cards } from '../../componentes_base/Card/Cards';
import { Space } from '../../componentes_base/Decrição/space';
import { Btx2 } from '../../componentes_base/BOTÕES/button_back/Text2'

function Home() {
    return(
        <div className="Pag1">
    <Btx2/>
            <div className='TOP'>

    <Header/>
    </div>
    <Icons/>
    <Cards/>
    

    <Space/>
    
    </div>
    )
}

export default Home