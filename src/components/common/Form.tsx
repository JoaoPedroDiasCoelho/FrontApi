import React from 'react';

const ModalFormulario = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
  if (!isVisible) return null;

  const backdropStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalContentStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    maxWidth: '500px',
    width: '90%',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    position: 'relative',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '1rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: '600',
    color: '#495057',
  };

  const primaryColor = '#209995';

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        
        <h3 style={{ marginTop: 0, color: '#343a40', fontSize: '1.5rem' }}>Enviar Nova Dúvida</h3>
        <p style={{ color: '#6c757d', marginBottom: '20px' }}>Preencha o formulário e nossa equipe responderá em breve.</p>
        
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            color: '#6c757d',
            cursor: 'pointer',
          }}
        >
          <span className="material-icons">close</span>
        </button>

        <form onSubmit={(e) => { e.preventDefault(); alert('Dúvida enviada com sucesso!'); onClose(); }}>
          
          <label style={labelStyle}>Seu Nome:</label>
          <input type="text" style={inputStyle} required />

          <label style={labelStyle}>Seu Email:</label>
          <input type="email" style={inputStyle} required />

          <label style={labelStyle}>Assunto:</label>
          <input type="text" style={inputStyle} required />
          
          <label style={labelStyle}>Descrição da Dúvida:</label>
          <textarea style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }} required></textarea>

          <button
            type="submit"
            style={{
              backgroundColor: primaryColor,
              color: 'white',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer',
              width: '100%',
              marginTop: '10px',
            }}
          >
            Enviar Dúvida
          </button>
        </form>

      </div>
    </div>
  );
};

export default ModalFormulario;