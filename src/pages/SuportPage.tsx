import React, { useState } from 'react';
import ModalFormulario from '../components/common/Form';

const PaginaDeSuporteComIcones = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '4px',
    border: '1px solid #dee2e6',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    padding: '25px',
  };

  const faqItemStyle = {
    ...cardStyle,
    padding: '15px 20px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  };

  const primaryColor = '#209995';
  const iconBaseStyle = { fontSize: '1.5rem', color: '#6c757d', marginRight: '15px', transform: 'translateY(2px)' };

  return (
    <div style={{padding: '40px', backgroundColor: '#f8f9fa', height: "85vh", display: 'flex', alignItems: "center", justifyContent: 'center'}}>
      <div style={{width: "80%"}}>

        <h1 style={{ fontSize: '2.5rem', color: '#343a40', marginBottom: '8px' }}>Página de Suporte</h1>
        <p style={{ fontSize: '1rem', color: '#6c757d', marginBottom: '40px' }}>
          Encontre respostas para suas dúvidas ou entre em contato com nossa equipe.
        </p>

        <div style={{display: 'flex', flexWrap: 'wrap', gap: '40px'}}>

          <div style={{ flex: '2', minWidth: '300px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.5rem', color: '#343a40', fontWeight: '600', margin: '0' }}>Perguntas Frequentes (FAQ)</h2>
              <button 
                onClick={() => setIsModalOpen(true)}
                style={{ backgroundColor: primaryColor, color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                <span className="material-icons" style={{ marginRight: '8px', fontSize: '1.2rem' }}>send</span> Enviar dúvida
              </button>
            </div>

            <div>
              <div style={faqItemStyle}>
                <span style={{ color: '#495057' }}>Como funciona o processo de avaliação de desempenho?</span>
                <span className="material-icons" style={{ color: '#6c757d', fontSize: '1.2rem' }}>expand_more</span>
              </div>
              <div style={faqItemStyle}>
                <span style={{ color: '#495057' }}>Posso editar minha avaliação depois de enviada?</span>
                <span className="material-icons" style={{ color: '#6c757d', fontSize: '1.2rem' }}>expand_more</span>
              </div>
              <div style={faqItemStyle}>
                <span style={{ color: '#495057' }}>Onde posso ver os resultados da minha avaliação anterior?</span>
                <span className="material-icons" style={{ color: '#6c757d', fontSize: '1.2rem' }}>expand_more</span>
              </div>
              <div style={faqItemStyle}>
                <span style={{ color: '#495057' }}>Quais são os critérios utilizados na avaliação?</span>
                <span className="material-icons" style={{ color: '#6c757d', fontSize: '1.2rem' }}>expand_more</span>
              </div>
              <div style={faqItemStyle}>
                <span style={{ color: '#495057' }}>O que acontece depois que eu submeto minha autoavaliação?</span>
                <span className="material-icons" style={{ color: '#6c757d', fontSize: '1.2rem' }}>expand_more</span>
              </div>
              <div style={faqItemStyle}>
                <span style={{ color: '#495057' }}>Com quem devo falar se discordar da minha avaliação final?</span>
                <span className="material-icons" style={{ color: '#6c757d', fontSize: '1.2rem' }}>expand_more</span>
              </div>
            </div>
          </div>

          <div style={{ flex: '1', minWidth: '250px' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#343a40', fontWeight: '600', margin: '0 0 20px 0' }}>Canais de Contato</h2>
            <div style={{ ...cardStyle, padding: '25px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span className="material-icons" style={iconBaseStyle}>mail</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#343a40', margin: '0 0 4px 0' }}>Email</h3>
                    <a href="mailto:suporte@empresa.com" style={{ color: primaryColor, textDecoration: 'none', fontSize: '0.95rem' }}>suporte@empresa.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span className="material-icons" style={iconBaseStyle}>phone</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#343a40', margin: '0 0 4px 0' }}>Telefone</h3>
                    <span style={{ color: '#495057', fontSize: '0.95rem' }}>+55 (11) 4002-8922</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span className="material-icons" style={iconBaseStyle}>chat</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#343a40', margin: '0 0 4px 0' }}>Chat Online</h3>
                    <span style={{ color: '#495057', fontSize: '0.95rem' }}>Disponível de Seg. a Sex. das 9h às 18h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalFormulario 
        isVisible={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>

    
  );
};

export default PaginaDeSuporteComIcones;