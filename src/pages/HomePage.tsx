import React from 'react';
import Header from '../components/layout/header';
import Sidebar from '../components/layout/sidebar';
import DashboardCard from '../components/common/DashboardCard';
import target from '../assets/images/target_card.svg';
import groups from '../assets/images/groups_card.svg';
import bar from '../assets/images/bar_card.svg';
import settings from '../assets/images/settings_card.svg';
import check from '../assets/images/check.svg'
import { useNavigate } from 'react-router-dom';

const cards = [
  {
    title: 'Avaliação 90°',
    description: 'Inicie ou acompanhe avaliações diretas de desempenho.',
    icon: target,
    path: '/avaliacao-90',
  },
  {
    title: 'Avaliação 360°',
    description: 'Gerencie avaliações completas com feedback de múltiplos avaliadores.',
    icon: groups,
    path: '/avaliacao-360',
  },
  {
    title: 'Relatórios',
    description: 'Visualize e exporte relatórios consolidados de desempenho.',
    icon: bar,
    path: '/relatorios',
  },
  {
    title: 'Painel do Administrador',
    description: 'Acesse configurações e ferramentas administrativas.',
    icon: settings,
    path: '/admin',
  },
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{width: '100%', backgroundColor: '#f0f2f5', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{display: 'flex', width: '100%'}}>
        <Sidebar />
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
          <div style={{width: '85%', paddingTop: 28, paddingBottom: 48}}>
            <h2 style={{fontSize: 42, fontWeight: 700, color: '#0a6377'}}>Menu Principal</h2>
            <h4 style={{fontWeight: 300, color: '#303030ff', marginTop: 6}}>Bem vindo, Usuario</h4>

            <div style={{height: 24}} />

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20}}>
              {cards.map((c) => (
                <DashboardCard
                  key={c.path}
                  title={c.title}
                  description={c.description}
                  icon={c.icon}
                  onClick={() => navigate(c.path)}
                />
              ))}
            </div>

            <div style={{display: 'flex', backgroundColor: "#dde3d5", width: "100%", padding: 40, borderRadius: "16px", marginTop: 48
            }}>
              <img src={check} style={{height: 40}} alt="" />
              <div style={{marginLeft: 20}}>
                <h5 style={{fontWeight: 700, fontSize: 21}}>Tudo em ordem!</h5>
                <p>Não há ações pendentes no momento.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
