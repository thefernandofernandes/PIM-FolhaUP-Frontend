
import React, { useState } from 'react';

function AdicionarBeneficio({ onAdd }) {
  const [codigofolha, setCodigoFolha] = useState('');          // Empresa
  const [nome, setNome] = useState('');  // Nome
  const [valor, setValor] = useState('');// Matricula
 
  const handleSubmit = () => {
    // Verificação básica para o nome e o CPF.     
    if (nome && codigofolha) {
      onAdd({ 
        
        codigofolha,
        nome, 
        valor
      });

      // Reset dos campos após o cadastro
      setCodigoFolha('');
      setNome('');
      setValor('');
     
    }
  };

  return (
    <div>
      <h2>Adicionar Funcionário</h2>

      <input type="number" placeholder="CodigoFolha" value={codigofolha} onChange={e => setCodigoFolha(e.target.value)} />
      <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
      <input type="number" placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)} />
      
      <button onClick={handleSubmit}>Adicionar</button>
    </div>
  );
}


export default AdicionarBeneficio;
