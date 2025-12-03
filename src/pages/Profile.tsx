import React from 'react';
import Sidebar from '../components/layout/sidebar';

const mockUserData = {
  nomeCompleto: "João Pedro Dias",
  email: "joao.dias@irko.com.br",
  fotoUrl: "https://avatars.githubusercontent.com/u/103696126?v=4",
  gestor: "Mariana Almeida (RH)",
  dataAdmissao: "05/03/2022",
  setor: "Tecnologia e Desenvolvimento",
};

const primaryColor = '#209995'; 
const lightGrayBackground = '#ecf0f1';
const sidebarWidth = '250px'; 
const textColor = '#343a40';
const labelColor = '#6c757d';

const ProfileContent = () => {
    const { 
        nomeCompleto, 
        email, 
        fotoUrl, 
        gestor, 
        dataAdmissao, 
        setor 
    } = mockUserData;

    const cardStyle: React.CSSProperties = {
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '30px',
    };
    
    const avatarStyle: React.CSSProperties = {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '20px',
        border: `3px solid ${primaryColor}`,
    };

    const sectionHeaderStyle: React.CSSProperties = {
        fontSize: '1.25rem',
        fontWeight: '600',
        color: primaryColor,
        borderBottom: `2px solid ${primaryColor}`,
        paddingBottom: '8px',
        marginBottom: '20px',
        marginTop: '30px',
    };

    const fieldGroupStyle: React.CSSProperties = {
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'column',
    };

    const labelStyle: React.CSSProperties = {
        fontSize: '0.9rem',
        fontWeight: '500',
        color: labelColor,
        marginBottom: '4px',
    };

    const valueStyle: React.CSSProperties = {
        fontSize: '1.0rem',
        fontWeight: '400',
        color: textColor,
        padding: '10px 12px',
        backgroundColor: '#f1f1f1',
        borderRadius: '4px',
        border: '1px solid #e9ecef', 
    };

    return (
        <div style={cardStyle}>
        
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <img 
                    src={fotoUrl} 
                    alt="Foto do Colaborador" 
                    style={avatarStyle} 
                />
                <h2 style={{ fontSize: '1.75rem', color: textColor, margin: '0 0 5px 0' }}>
                    {nomeCompleto}
                </h2>
                <p style={{ color: labelColor, fontSize: '1.0rem' }}>
                    {email}
                </p>
            </div>
            
            <div style={sectionHeaderStyle}>
                Informações Profissionais
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 40px' }}>
                
                <div style={fieldGroupStyle}>
                    <label style={labelStyle}>Nome Completo</label>
                    <div style={valueStyle}>{nomeCompleto}</div>
                </div>

                <div style={fieldGroupStyle}>
                    <label style={labelStyle}>E-mail Corporativo</label>
                    <div style={valueStyle}>{email}</div>
                </div>
                
                <div style={fieldGroupStyle}>
                    <label style={labelStyle}>Gestor Imediato</label>
                    <div style={valueStyle}>{gestor}</div>
                </div>
                
                <div style={fieldGroupStyle}>
                    <label style={labelStyle}>Setor/Área</label>
                    <div style={valueStyle}>{setor}</div>
                </div>
                
                <div style={fieldGroupStyle}>
                    <label style={labelStyle}>Data de Admissão</label>
                    <div style={valueStyle}>{dataAdmissao}</div>
                </div>
                
                <div style={fieldGroupStyle}>
                    <label style={labelStyle}>Status de Vínculo</label>
                    <div style={valueStyle}>Ativo (CLT)</div>
                </div>
                
            </div>
        </div>
    );
};

const ProfilePageLayout = () => {
    
    const dashboardContainerStyle: React.CSSProperties = {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: lightGrayBackground,
    };

    const mainContentStyle: React.CSSProperties = {
        flexGrow: 1,
        marginLeft: sidebarWidth,
        padding: '30px',
    };

    return (
        <div style={dashboardContainerStyle}>
            
            <Sidebar />

            <div style={mainContentStyle}>

                <ProfileContent />
            </div>
        </div>
    );
};

export default ProfilePageLayout;