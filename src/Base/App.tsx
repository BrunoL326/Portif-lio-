import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Changes from '../Sobre/Mim'
import './styles.css';
import Starter from '../Starter/Starter';

 function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Starter />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Sobre" element={<Changes />}/>
        </Routes>
    </Router>
  );
}

export default App
