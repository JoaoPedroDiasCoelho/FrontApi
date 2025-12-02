import React from 'react';

const FlowbackBenefits = () => {
  const mainColor = '#00545D';

  const benefitsData = [
    {
      iconClass: 'folder_open', 
      title: 'Centralize tudo',
      description: 'Centralize todas as avaliações em um único ambiente.',
      iconBgColor: '#FF7F41', 
    },
    {
      iconClass: 'access_time', 
      title: 'Acompanhe em tempo real',
      description: 'Acompanhe prazos e status em tempo real.',
      iconBgColor: '#FF7F41',
    },
    {
      iconClass: 'rule', 
      title: 'Padronize processos',
      description: 'Padronize processos e promova decisões justas.',
      iconBgColor: '#78C47F', 
    },
    {
      iconClass: 'chat_bubble_outline',
      title: 'Cultura de feedback',
      description: 'Fortaleça a cultura de feedback construtivo.',
      iconBgColor: '#78C47F',
    },
  ];

  const BenefitCard = ({ iconClass, title, description, iconBgColor }: { iconClass: string; title: string; description: string; iconBgColor: string }) => (
    <div
      style={{
        padding: '24px',
        border: '1px solid #e0e0e0',
        borderRadius: '12px', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', 
        backgroundColor: 'white',
        cursor: 'default',
        transition: 'none',
        textAlign: 'left',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div
          style={{
            marginRight: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            padding: '8px',
            borderRadius: '6px',
            backgroundColor: "#00000",
            flexShrink: 0,
          }}
        >
            <span
                className="material-icons"
                style={{
                    fontSize: '24px',
                    color: iconBgColor,
                }}
            >
                {iconClass}
            </span>
        </div>
        
        <h3
          style={{
            fontSize: '19px',
            fontWeight: '700',
            color: '#333',
            margin: 0,
            marginTop: '8px',
          }}
        >
          {title}
        </h3>
      </div>
      
      <p style={{ fontSize: '15px', color: '#666', marginTop: '4px', lineHeight: '1.4' }}>
        {description}
      </p>
    </div>
  );

  return (
    <section
      style={{
        padding: '80px 20px',
        backgroundColor: '#F7F9FB',
        height: "85vh",
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        
        <div style={{ flex: '1', maxWidth: '400px', marginRight: '40px', textAlign: 'left', marginBottom: '40px' }}>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: mainColor,
              marginBottom: '20px',
            }}
          >
            Benefícios
          </h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px', lineHeight: '1.6' }}>
            Descubra como o FLOWBACK pode transformar a gestão de desempenho da sua empresa.
          </p>
          
          <button
            style={{
              padding: '12px 30px',
              backgroundColor: '#FF7F41',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            Contato
          </button>
        </div>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            maxWidth: '650px',
            flex: '1',
            minWidth: '400px',
          }}
        >
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              iconClass={benefit.iconClass}
              title={benefit.title}
              description={benefit.description}
              iconBgColor={benefit.iconBgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowbackBenefits;