import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './paginas/Home/home';
import Projetos from './paginas/Projetos/projetos';
import Equipe from './paginas/Equipe/equipe';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/projetos' element={<Projetos></Projetos>} />
      <Route path='/equipe' element={<Equipe></Equipe>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
