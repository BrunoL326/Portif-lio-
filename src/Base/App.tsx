import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import { Page1 } from '../Pages/Como/como';
import { Page2 } from '../Pages/Sobre/Mim';
import { Page3 } from '../Pages/Porque/why';
import './styles.css';
import Starter from '../Pages/Starter/Starter';

 function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Starter />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Como" element={<Page1 />}/>
          <Route path="/Sobre" element={<Page2 />}/>
          <Route path="/Porque" element={<Page3 />}/>
        </Routes>
    </Router>
  );
}

export default App
