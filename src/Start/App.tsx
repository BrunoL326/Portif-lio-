
import { Header } from '../componentes/Topo/A/header';
import { Icons } from '../componentes/TechIcons/Icons';
import {Cards } from '../componentes/Card/Cards'
import { Space } from '../componentes/Decrição/space'
import './styles.css'

 function App() {

  return (
    <div>
      <div className='TOP'>
    <Header />
    
    <Icons />
    </div>
    
    <Cards/> 
      
    
     <div className='Botton'>
    <Space />
    </div>
    </div>
  );
}

export default App
