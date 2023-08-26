import { Header } from '../componentes/Topo/A/header';
import { Icons } from '../componentes/TechIcons/Icons';
import { Cards } from '../componentes/Card/Cards';
import { Space } from '../componentes/Decrição/space';

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