import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';
import Projetos from './pages/Projetos/projetos';
import Equipe from './pages/Equipe/equipe';
import ProcessoSeletivo from './pages/ProcessoSeletivo/ProcessoSeletivo';
import Footer from './components/Footer/footer';
import Faq from './pages/Faq/Faq';
import MenuMobile from './components/MenuMobile/MenuMobile';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <MenuMobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/processo-seletivo" element={<ProcessoSeletivo />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
