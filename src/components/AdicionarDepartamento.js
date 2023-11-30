
import React, { useState } from 'react';
import { useLocation } from 'react-router'; 

function AdicionarDepartamento({ onAdd }) {
  const [nome, setNome] = useState('');  // Nome
  const location = useLocation();
  const { cnpj } = location.state || {};
  const [cnpjState] = useState(cnpj);
  
  const handleSubmit = () => {
    // Verificação básica para o nome e o CPF.     
    if (nome && cnpj) {
      onAdd({ 
        cnpj, 
        nome, 
      
      });

      // Reset dos campos após o cadastro
      setNome('');
    
    }
  };

  return (
    <div className="form-container">
      <input type="number" placeholder="cnpj" value={cnpjState} readOnly />
      <input type="text" placeholder="Nome do Departamento" value={nome} onChange={e => setNome(e.target.value)} />
      
      <button id = "BTN" onClick={handleSubmit}>Adicionar</button>
    </div>
  );
}


export default AdicionarDepartamento;
