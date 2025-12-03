import React, { useState, useEffect } from 'react';

interface Employee {
  ID?: string | number;
  id?: string | number;
  funcionario: string;
  setor: string;
}

const loggedUser = {
  nome: "LETICIA PORTAL QUINTANILHA", 
};


const EvaluationScreen = () => {
  const [teamMembers, setTeamMembers] = useState<Employee[]>([]);

  const styles: { [key: string]: React.CSSProperties } = {
    container: { fontFamily: 'Arial, sans-serif', padding: '30px', backgroundColor: '#f4f7f9', minHeight: '100vh' },
    card: { backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '20px' },
    header: { color: '#333', borderBottom: '2px solid #61729E', paddingBottom: '10px', marginBottom: '20px' },
    list: { listStyleType: 'none', padding: 0 },
    listItem: { display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' },
    button: { backgroundColor: '#61729E', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' },
    error: { color: 'red', fontWeight: 'bold' },
    info: { color: '#777', borderBottom: '1px solid #eee', paddingBottom: '10px' },
  };

  useEffect(() => {
    const encodedGestorName = encodeURIComponent(loggedUser.nome);

    const apiUrl = `http://localhost:8080/api/funcionarios?gestor=${encodedGestorName}`; 
    
    const fetchFilteredEmployees = async () => {
      
      try {
        const response = await fetch(apiUrl);
        const teamMembersData = await response.json(); 
        
        setTeamMembers(teamMembersData);

      } catch (err) {
        console.error("Falha ao buscar dados:", err);
      }
    };

    fetchFilteredEmployees();

  }, []);

  return (
    <div style={styles.container}>
      
      <div style={styles.card}>
        <h2 style={{ color: '#555', fontSize: '1.2rem', marginBottom: '15px'}}>
          Equipe de <span style={{ color: '#61729E' }}>{loggedUser.nome}</span> ({teamMembers.length} Membros)
        </h2>

        {teamMembers.length > 0 ? (
          <ul style={styles.list}>
            <li style={{ ...styles.listItem, backgroundColor: '#f9f9f9', fontWeight: 'bold' }}>
                <div style={{ width: '40%' }}>Nome do Funcionário</div>
                <div style={{ width: '30%' }}>Setor</div>
                <div style={{ width: '20%', textAlign: 'right' }}>Ação</div>
            </li>
            {teamMembers.map((employee) => (
              
              <li key={employee.ID || employee.id} style={styles.listItem}>
                
                <div style={{ width: '40%' }}>
                    {employee['funcionario']} 
                </div>
                
                <div style={{ width: '30%', color: '#666' }}>
                    {employee['setor']}
                </div>
                
                <div style={{ width: '20%', textAlign: 'right' }}>
                  <button style={styles.button}>Avaliar</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: '#aaa', marginTop: '20px' }}>Nenhum funcionário encontrado para o gerenciamento de {loggedUser.nome}.</p>
        )}
      </div>
    </div>
  );
};

export default EvaluationScreen;