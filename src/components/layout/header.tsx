import React, { useState } from 'react';
import './header.css';
import logoImg from '../../assets/images/logo.png';
import bell from '../../assets/images/bell.png'

const Header: React.FC = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="header" style={{border: "1px solid #c5c5c5"}}>
      <div className="header-left">
        <a href="/">
          <img src={logoImg} style={{height: 25}} alt="logo" />
        </a>
      </div>
      <div className="header-right">
        <div className="header-icon-wrapper">
          <img className="header-icon" src={bell} alt="Notificações"/>
          <span className="header-notification-dot"></span>
        </div>
        <div className="header-icon-wrapper">
          <a href='/perfil' className="header-icon">👤</a>
          <span className="header-notification-dot"></span>
        </div>
        <div 
          className="header-user-menu"
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        >
          <div className="header-user-info" style={{display: 'flex', alignItems: 'center'}}>
            <span className="header-user-label">Usuário</span>
            <span className="header-user-action">Ver Perfil</span>
          </div>
          <span className="header-chevron">▼</span>
        </div>
      </div>
    </header>
  );
};

export default Header;