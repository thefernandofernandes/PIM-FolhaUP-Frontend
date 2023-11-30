
import React, { useState } from 'react';
import SelecaoFuncionarios from './SelecaoFuncionarios';

function AdicionarFolhaPagamento({ onAdd }) {
  const [cpf, setCpf] = useState('');
  const [mes, setMes] = useState('');          // Mes
  const [ano, setAno] = useState('');  // Ano
  const [diastrabalho, setDiasTrabalho] = useState('');// Contagem de dias
  const [salario, setSalario] = useState(''); // Contagem de Horas
 
  
  const handleSubmit = () => {
    // Verificação básica para o nome e o CPF.     
    if (mes && cpf) {
      onAdd({ 
        cpf,
        ano,
        mes,
        diastrabalho,
        salario,
        
      });

      // Reset dos campos após o cadastro
      setCpf('');
      setAno('');
      setMes('');
      setDiasTrabalho('');
      setHorasTrabalho('');
     
    }
  };

  return (
    <div>
      <h2>Adicionar Funcionário</h2>
      <SelecaoFuncionarios onChange={handleFuncionarioChange} /> 
      <input type="number" placeholder="ano" value={ano} onChange={e => setAno(e.target.value)} />
      <input type="number" placeholder="mes" value={mes} onChange={e => setMes(e.target.value)} />
      <input type="number" placeholder="diastrabalho" value={diastrabalho} onChange={e => setDiasTrabalho(e.target.value)} />
      <input type="number" placeholder="salario" value={salario} onChange={e => setSalario(e.target.value)} />
     
      
      <button onClick={handleSubmit}>Adicionar</button>
    </div>
  );
}


export default AdicionarFolhaPagamento;
