import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = () => {
    if (!email) {
      setEmailError(true);
      return;
    }
    
    console.log('Login:', { email, password });
   
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '60px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
     
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ 
          fontSize: '16px', 
          fontWeight: '600', 
          margin: '0 0 4px 0',
          letterSpacing: '0.5px'
        }}>
          TELA DE LOGIN
        </h1>
        <p style={{ 
          fontSize: '13px', 
          color: '#666', 
          margin: 0 
        }}>
          Acesso ao Sistema
        </p>
      </div>

     
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '48px 40px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
       
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            margin: '0 auto 16px',
            background: 'linear-gradient(135deg, #0d7377 0%, #14919b 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotate(45deg)'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              backgroundColor: 'white',
              borderRadius: '4px',
              transform: 'rotate(-45deg)'
            }} />
          </div>
          <div style={{ 
            fontSize: '11px', 
            fontWeight: '600',
            letterSpacing: '1.5px',
            color: '#333'
          }}>
            FLOWBACK
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ 
            fontSize: '22px', 
            fontWeight: '600', 
            margin: '0 0 8px 0',
            color: '#1a1a1a'
          }}>
            Bem-vindo de volta!
          </h2>
          <p style={{ 
            fontSize: '13px', 
            color: '#666', 
            margin: 0 
          }}>
            Acesse sua conta para continuar
          </p>
        </div>

        
        <div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              fontSize: '13px', 
              fontWeight: '500',
              marginBottom: '8px',
              color: '#333'
            }}>
              E-mail ou Usuário
            </label>
            <div style={{ position: 'relative' }}>
              <svg 
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#999',
                  pointerEvents: 'none'
                }}
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                placeholder="Digite seu e-mail ou usuário"
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 40px',
                  border: emailError ? '1px solid #ff6b6b' : '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = emailError ? '#ff6b6b' : '#ff6b35'}
                onBlur={(e) => e.target.style.borderColor = emailError ? '#ff6b6b' : '#ddd'}
              />
              {emailError && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  right: '12px',
                  transform: 'translateY(-50%)',
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap'
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  Preencha este campo.
                </div>
              )}
            </div>
          </div>

         
          <div style={{ marginBottom: '12px' }}>
            <label style={{ 
              display: 'block', 
              fontSize: '13px', 
              fontWeight: '500',
              marginBottom: '8px',
              color: '#333'
            }}>
              Senha
            </label>
            <div style={{ position: 'relative' }}>
              <svg 
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#999',
                  pointerEvents: 'none'
                }}
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 40px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#ff6b35'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#999',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          
          <div style={{ textAlign: 'right', marginBottom: '24px' }}>
            <a 
              href="/forgot-password" 
              style={{ 
                fontSize: '13px', 
                color: '#0d7377',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              Esqueci minha senha
            </a>
          </div>

          
          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#ff6b35',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              marginBottom: '24px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ff5722'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff6b35'}
          >
            Entrar
          </button>

          
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '13px', color: '#666' }}>
              Não tem uma conta?{' '}
            </span>
            <a 
              href="/signup" 
              style={{ 
                fontSize: '13px', 
                color: '#0d7377',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Crie uma
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;