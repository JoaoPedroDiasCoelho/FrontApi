import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './sidebar.css';
import settings from '../../assets/images/settings.svg'
import groups from '../../assets/images/groups.svg'
import bar from '../../assets/images/bar.svg'
import target from '../../assets/images/target.svg'
import personAdd from '../../assets/images/person_add.svg'
import headset from '../../assets/images/headphones.svg'
import help from '../../assets/images/help.svg'

interface SidebarItem {
  label: string;
  icon: string;
  path: string;
}

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const mainItems: SidebarItem[] = [
    { label: 'Avaliação 90°', icon: target, path: '/avaliacao-90' },
    { label: 'Avaliação 360°', icon: groups, path: '/avaliacao-360' },
    { label: 'Relatórios', icon: bar, path: '/relatorios' },
    { label: 'Painel do Administrador', icon: settings, path: '/admin' },
  ];

  const bottomItems: SidebarItem[] = [
    { label: 'Benefício do Flowback', icon: personAdd, path: '/beneficio' },
    { label: 'Ajuda', icon: help, path: '/ajuda' },
    { label: 'Suporte', icon: headset, path: '/suporte' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div 
          className={`sidebar-item ${location.pathname === '/' ? 'active' : ''}`}
          onClick={() => navigate('/')}
        >
          <span className="sidebar-icon">☰</span>
          <span className="sidebar-label">Menu Principal</span>
        </div>

        <div className="sidebar-divider"></div>

        <nav className="sidebar-nav">
          {mainItems.map((item) => (
            <div
              key={item.path}
              className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <img src={item.icon} style={{marginRight: 10}} alt="" />
              <span className="sidebar-label">{item.label}</span>
            </div>
          ))}
        </nav>

        <div className="sidebar-spacer"></div>

        <nav className="sidebar-nav">
          {bottomItems.map((item) => (
            <div
              key={item.path}
              className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <img src={item.icon} style={{marginRight: 10}} alt="" />
              <span className="sidebar-label">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;