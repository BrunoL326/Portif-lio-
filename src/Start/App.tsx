import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Changes from '../Sobre/Mim'
import './styles.css';

 function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Sobre" element={<Changes />}/>
        </Routes>
    </Router>
  );
}

export default App
