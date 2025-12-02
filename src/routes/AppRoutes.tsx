import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import '../App.css';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import FlowbackBenefits from '../pages/Benefics';
import HowItWorks from '../pages/Help';
import SuportPage from '../pages/SuportPage';
import PaginaPrincipalComNotificacoes from '../pages/ReportDetailsPage';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import LoginPage from '../pages/LoginPage';

function AppRoutes() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/avaliacao-90" element={<div>Página de Avaliação 90°</div>} />
        <Route path="/avaliacao-360" element={<div>Página de Avaliação 360°</div>} />
        <Route path="/relatorios" element={<PaginaPrincipalComNotificacoes />} />
        <Route path="/admin" element={<div>Painel do Administrador</div>} />
        <Route path="/beneficio" element={<FlowbackBenefits />} />
        <Route path="/ajuda" element={<HowItWorks />} />
        <Route path="/suporte" element={<SuportPage />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos" element={<SuportPage />} />
        <Route path="/" element={<LoginPage />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;