import React from 'react';

const HowItWorks = () => {
  const stepsData = [
    {
      number: '1.',
      iconClass: 'play_circle_outline',
      title: 'Avaliação 90º Mensal',
      description: 'O gestor inicia o ciclo de avaliação mensal de 90º, focando no desenvolvimento contínuo e alinhamento de metas.',
      color: '#00bcd4',
    },
    {
      number: '2.',
      iconClass: 'groups',
      title: 'Avaliação 360º Semestral',
      description: 'Colaboradores e seus pares participam da avaliação 360º, oferecendo uma visão completa e multifacetada do desempenho.',
      color: '#4caf50',
    },
    {
      number: '3.',
      iconClass: 'bar_chart',
      title: 'Relatórios Automáticos',
      description: 'O sistema gera relatórios automáticos e históricos anuais, consolidando dados para insights estratégicos.',
      color: '#ff9800',
    },
    {
      number: '4.',
      iconClass: 'auto_fix_high',
      title: 'IA para Feedbacks',
      description: 'Nossa Inteligência Artificial aprimora os comentários, tornando os feedbacks mais construtivos e acionáveis.',
      color: '#2196f3',
    },
  ];

  const StepCard = ({ number, iconClass, title, description, color }: { number: string; iconClass: string; title: string; description: string; color: string }) => (
    <div
      style={{
        padding: '24px',
        backgroundColor: '#f8f8f8',
        borderRadius: '8px',
        textAlign: 'center',
        margin: '0',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: color,
          marginBottom: '16px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <span
          className="material-icons"
          style={{
            fontSize: '28px',
            color: 'white',
          }}
        >
          {iconClass}
        </span>
      </div>
      <h3
        style={{
          fontSize: '18px',
          fontWeight: '700',
          color: '#005F73',
          marginBottom: '8px',
        }}
      >
        {number} {title}
      </h3>
      <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
        {description}
      </p>
    </div>
  );

  const gridContainerStyle = {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
    justifyContent: 'center',
  };

  return (
    <section
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
        height: "85vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px',
          }}
        >
          Como Funciona
        </h2>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
          Um processo simples e intuitivo para transformar a gestão de desempenho da sua equipe.
        </p>
        
        <div style={gridContainerStyle}>
          {stepsData.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              iconClass={step.iconClass}
              title={step.title}
              description={step.description}
              color={step.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;