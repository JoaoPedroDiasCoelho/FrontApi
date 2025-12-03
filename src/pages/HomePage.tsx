import React, { useState } from 'react';
import Sidebar from '../components/layout/sidebar';
import DashboardCard from '../components/common/DashboardCard';
import target from '../assets/images/target_card.svg';
import groups from '../assets/images/groups_card.svg';
import bar from '../assets/images/bar_card.svg';
import settings from '../assets/images/settings_card.svg';
import check from '../assets/images/check.svg'
import { useNavigate } from 'react-router-dom';

const userStatus = {
    status: 'pendencia_90', 
};

const getNotificationText = (status: any): any => {
    switch (status) {
        case 'sem_pendencias':
            return {
                message: 'Não há pendências no momento',
                backgroundColor: '#dde3d5',
                icon: check,
                textColor: '#303030ff',
                title: 'Tudo em ordem!',
                iconClass: 'check_circle_outline'
            };
        case 'pendencia_90':
            return {
                message: 'Você possui pendências na Avaliação 90º.',
                backgroundColor: '#ffe0b2',
                icon: null,
                textColor: '#e65100',
                title: 'Atenção!',
                iconClass: 'notification_important'
            };
        case 'pendencia_360':
            return {
                message: 'Você possui pendências na Avaliação 360º.',
                backgroundColor: '#ffe0b2',
                icon: null,
                textColor: '#e65100',
                title: 'Atenção!',
                iconClass: 'notification_important'
            };
        case 'pendencia_ambas':
            return {
                message: 'Você possui pendências nas Avaliações 90º e 360º.',
                backgroundColor: '#ffcdd2',
                icon: null,
                textColor: '#b71c1c',
                title: 'Alerta Crítico!',
                iconClass: 'error_outline'
            };
        default:
            return getNotificationText('sem_pendencias');
    }
};


const NotificacaoHistorico = ({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) => {
    if (!isVisible) return null;

    const historicoData = [
        { id: 1, message: 'Você possui pendências nas Avaliações 90º e 360º.', timestamp: '2025-12-02T11:00:00', lida: false },
        { id: 2, message: 'Não há pendências no momento', timestamp: '2025-12-01T14:30:00', lida: true },
        { id: 3, message: 'Você possui pendências na Avaliação 90º.', timestamp: '2025-11-30T09:15:00', lida: false },
        { id: 4, message: 'Pendência na Avaliação 360º resolvida.', timestamp: '2025-11-29T16:45:00', lida: true },
    ];
    
    const itemBaseStyle = {
        padding: '12px 15px',
        borderBottom: '1px solid #eee',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'background-color 0.2s',
    };

    const formatTimestamp = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('pt-BR') + ' ' + date.toLocaleTimeString('pt-BR').substring(0, 5); // RF11
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 }}>
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', maxWidth: '700px', width: '90%', maxHeight: '85%', overflowY: 'auto', position: 'relative', fontFamily: 'sans-serif' }}>
                <h3 style={{ margin: '0 0 20px 0', color: '#0a6377', fontSize: '24px' }}>Histórico de Notificações</h3>
                <button onClick={() => onClose()} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '1.8rem', cursor: 'pointer', color: '#666' }}>
                    <span className="material-icons">close</span>
                </button>

                <div style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
                    {historicoData.map(item => (
                        <div 
                            key={item.id} 
                            style={{ 
                                ...itemBaseStyle,
                                fontWeight: item.lida ? 400 : 700, // RN06 (Negrito para não lidas)
                                opacity: item.lida ? 0.6 : 1, // RN07 (Esmaecido para lidas)
                            }}
                            onClick={() => {
                                // Simulação de marcar como lida (RF09)
                                alert(`Notificação ID ${item.id} marcada como lida e visualizada.`); 
                                // Em uma aplicação real, você faria uma chamada API aqui e atualizaria o estado.
                            }}
                        >
                            <span style={{ flex: 1, color: '#303030' }}>{item.message}</span>
                            <span style={{ fontSize: '0.85rem', color: '#666', marginLeft: '15px' }}>
                                {formatTimestamp(item.timestamp)}
                            </span>
                        </div>
                    ))}
                </div>
                <p style={{marginTop: 15, fontSize: 13, color: '#666'}}>* O histórico lista todas as notificações disparadas ao usuário, ordenadas pela mais recente. Clique para marcar como lida (RF06, RF10).</p>
            </div>
        </div>
    );
};


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
    const [isHistoricoOpen, setIsHistoricoOpen] = useState(false);
    const notification = getNotificationText(userStatus.status);

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

                        <div 
                            style={{
                                display: 'flex', 
                                backgroundColor: notification.backgroundColor,
                                width: "100%", 
                                padding: 40, 
                                borderRadius: "16px", 
                                marginTop: 48,
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                {notification.icon ? (
                                    <img src={notification.icon} style={{height: 40}} alt="" />
                                ) : (
                                    <span className="material-icons" style={{ fontSize: '40px', color: notification.textColor, height: 40, width: 40 }}>
                                        {notification.iconClass}
                                    </span>
                                )}

                                <div style={{marginLeft: 20}}>
                                    <h5 style={{fontWeight: 700, fontSize: 21, color: notification.textColor}}>{notification.title}</h5>
                                    <p style={{color: notification.textColor}}>{notification.message}</p>
                                </div>
                            </div>
                            
                            <button 
                                onClick={() => setIsHistoricoOpen(true)}
                                style={{
                                    backgroundColor: 'transparent',
                                    border: `1px solid ${notification.textColor}`,
                                    color: notification.textColor,
                                    padding: '10px 20px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    transition: 'background-color 0.2s',
                                }}
                            >
                                <span className="material-icons" style={{ marginRight: '8px', fontSize: '1.2rem' }}>history</span>
                                Histórico
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <NotificacaoHistorico 
                isVisible={isHistoricoOpen} 
                onClose={() => setIsHistoricoOpen(false)} 
            />
        </div>
    );
}

export default HomePage;