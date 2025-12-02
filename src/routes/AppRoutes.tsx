import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import '../App.css';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

function AppRoutes() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/avaliacao-90" element={<div>Página de Avaliação 90°</div>} />
        <Route path="/avaliacao-360" element={<div>Página de Avaliação 360°</div>} />
        <Route path="/relatorios" element={<div>Página de Relatórios</div>} />
        <Route path="/admin" element={<div>Painel do Administrador</div>} />
        <Route path="/beneficio" element={<div>Benefício do Flowback</div>} />
        <Route path="/ajuda" element={<div>Ajuda</div>} />
        <Route path="/suporte" element={<div>Suporte</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;