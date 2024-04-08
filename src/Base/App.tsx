import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Changes from '../Pages/Sobre/Mim';
import './styles.css';
import Starter from '../Pages/Starter/Starter';

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
