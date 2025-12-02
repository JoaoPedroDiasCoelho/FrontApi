import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span>© 2023 Grupo IRKO. Todos os direitos reservados.</span>
      </div>
      <div className="footer-right">
        <a href="/termos" className="footer-link">Termos de Serviço</a>
        <a href="/privacidade" className="footer-link">Política de Privacidade</a>
      </div>
    </footer>
  );
};

export default Footer;