import React, { useState, useEffect } from 'react';

const loggedUser = {
  id: 132,
  cargo: 'Colaborador',
  setor: 'FISCAL',
};

interface Member {
  id: number;
  name: string;
  setor?: string;
  cargo?: string;
}

interface Group {
  groupName: string;
  eligibleMembers: Member[];
}

interface EvaluationData {
  communication?: string;
  comments?: string;
}

const Evaluation360Screen: React.FC = () => {
  const [eligibilityData, setEligibilityData] = useState<Group[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<Member | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isSent, setIsSent] = useState<boolean>(false);
  const [draftSaved, setDraftSaved] = useState<boolean>(false);
  const [evaluationData, setEvaluationData] = useState<EvaluationData>({});
  const [ineligibleGroups, setIneligibleGroups] = useState<string[]>([]);

  const styles: { [key: string]: React.CSSProperties } = {
    container: { fontFamily: 'Arial, sans-serif', padding: '30px', backgroundColor: '#f4f7f9', minHeight: '100vh' },
    card: { backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '25px', marginBottom: '20px' },
    header: { color: '#333', borderBottom: '2px solid #00bcd4', paddingBottom: '10px', marginBottom: '20px' },
    selectionGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' },
    dropdown: { width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' },
    formGroup: { marginBottom: '15px' },
    label: { display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' },
    textArea: { width: '98%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '100px' },
    buttonPrimary: { backgroundColor: '#00bcd4', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' },
    buttonSecondary: { backgroundColor: '#ccc', color: '#333', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' },
    successMessage: { padding: '15px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px', fontWeight: 'bold', textAlign: 'center' }
  };

  useEffect(() => {
    const apiUrl = `http://localhost:8080/api/avaliacoes/elegiveis?avaliadorId=${loggedUser.id}&cargo=${loggedUser.cargo}`;
    const fetchEligibility = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || `Erro HTTP: ${response.status}`);
        }

        setEligibilityData(data);
      } catch (err: any) {
        console.error('Falha ao buscar elegibilidade:', err);
        setError(`Falha ao carregar grupos elegíveis: ${err?.message || String(err)}. Verifique o backend.`);
      } finally {
        setLoading(false);
      }
    };

    fetchEligibility();
  }, []);

  const handleSelectGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const groupName = e.target.value;
    const group = eligibilityData.find((g) => g.groupName === groupName) || null;
    setSelectedGroup(group);
    setSelectedPerson(null);
    setEvaluationData({});
    setIsSent(false);
    setDraftSaved(false);
  };

  const handleSelectPerson = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const personId = parseInt(e.target.value, 10);
    const person = selectedGroup?.eligibleMembers.find((p) => p.id === personId) || null;
    setSelectedPerson(person);
    setEvaluationData({});
    setIsSent(false);
    setDraftSaved(false);
  };

  const handleSaveDraft = () => {
    console.log('Rascunho salvo:', evaluationData);
    setDraftSaved(true);
    setIsSent(false);
  };

  const handleSubmit = () => {
    if (!selectedPerson || !selectedGroup) {
      console.warn('Nenhuma pessoa ou grupo selecionado para envio.');
      return;
    }

    console.log('Avaliação enviada:', selectedPerson.name, evaluationData);

    setIneligibleGroups([...ineligibleGroups, selectedGroup.groupName]);
    setSelectedPerson(null);
    setSelectedGroup(null);
    setEvaluationData({});
    setIsSent(true);
    setDraftSaved(false);
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>Carregando regras de elegibilidade da API...</div>
      </div>
    );
  }

  if (eligibilityData.length === 0) {
    return (
      <div style={styles.container}>
        <div style={{ ...styles.card, color: error ? 'red' : '#333' }}>
          {error ? `Erro: ${error}` : 'Você não possui grupos elegíveis para avaliação neste ciclo.'}
        </div>
      </div>
    );
  }

  const EvaluationForm: React.FC = () => (
    <div style={styles.card}>
      <h3 style={{ color: '#00bcd4', marginBottom: '20px' }}>
        Avaliação 360°: {selectedPerson?.name}
      </h3>

      <div style={styles.formGroup}>
        <label style={styles.label}>1. Qualidade da Comunicação (0 a 5):</label>
        <input
          type="number"
          min={0}
          max={5}
          style={styles.dropdown}
          value={evaluationData.communication ?? ''}
          onChange={(e) => setEvaluationData({ ...evaluationData, communication: e.target.value })}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>2. Comentários Qualitativos sobre a atuação:</label>
        <textarea
          style={styles.textArea}
          value={evaluationData.comments ?? ''}
          onChange={(e) => setEvaluationData({ ...evaluationData, comments: e.target.value })}
        />
      </div>

      <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '20px' }}>
        Esta avaliação é totalmente anônima — seu nome não aparecerá no relatório final.
      </p>

      <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
        <button
          style={styles.buttonSecondary}
          onClick={handleSaveDraft}
        >
          Salvar como Rascunho
        </button>
        <button
          style={styles.buttonPrimary}
          onClick={handleSubmit}
          disabled={!evaluationData.communication}
        >
          Salvar e Enviar
        </button>
        {draftSaved && (
          <span style={{ marginLeft: '10px', color: '#00bcd4', fontWeight: 'bold' }}>
            Rascunho Salvo!
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>
        <span className="material-icons" style={{ verticalAlign: 'middle', marginRight: '10px' }}>group_add</span>
        Avaliação de Desempenho 360°
      </h1>

      {isSent && (
        <div style={{ ...styles.successMessage, marginBottom: '20px' }}>
          AVALIAÇÃO ENVIADA COM SUCESSO
        </div>
      )}

      <div style={styles.card}>
        <h2 style={{ color: '#555', fontSize: '1.2rem', marginBottom: '20px' }}>
          1. Seleção de Avaliado
        </h2>

        <div style={styles.selectionGrid}>

          <div>
            <label style={styles.label}>Grupo de Avaliação:</label>
            <select
              style={styles.dropdown}
              onChange={handleSelectGroup}
              value={selectedGroup?.groupName || ''}
              disabled={isSent}
            >
              <option value="">Selecione o Grupo</option>
              {eligibilityData.map((group, index) => (
                <option
                  key={index}
                  value={group.groupName}
                  disabled={ineligibleGroups.includes(group.groupName)}
                >
                  {group.groupName}
                  {ineligibleGroups.includes(group.groupName) && ' (Concluído)'}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={styles.label}>Pessoa a ser Avaliada:</label>
            <select
              style={styles.dropdown}
              onChange={handleSelectPerson}
              value={selectedPerson?.id || ''}
              disabled={!selectedGroup || isSent}
            >
              <option value="">Selecione a Pessoa</option>
              {selectedGroup?.eligibleMembers.map((person) => (
                <option
                  key={person.id}
                  value={person.id}
                >
                  {person.name} ({person.setor || person.cargo})
                </option>
              ))}
            </select>
            <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '5px' }}>
              Regra: Você só pode ver grupos e pessoas elegíveis.
            </p>
          </div>
        </div>

        {selectedPerson && <EvaluationForm />}
      </div>
    </div>
  );
};

export default Evaluation360Screen;