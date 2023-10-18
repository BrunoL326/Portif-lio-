import { Header } from '../componentes_base/Topo/A/header';
import { Icons } from '../componentes_base/TechIcons/Icons';
import { Cards } from '../componentes_base/Card/Cards';
import { Space } from '../componentes_base/Decrição/space';

function Home() {
    return(
        <div className="Pag1">
            <div className='TOP'>
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