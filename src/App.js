import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';
import Projetos from './pages/Projetos/projetos';
import Equipe from './pages/Equipe/equipe';
import ProcessoSeletivo from './pages/ProcessoSeletivo/ProcessoSeletivo';
import Footer from './components/Footer/footer';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/projetos' element={<Projetos></Projetos>} />
      <Route path='/equipe' element={<Equipe></Equipe>} />
      <Route path='/processo-seletivo' element={<ProcessoSeletivo />} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
