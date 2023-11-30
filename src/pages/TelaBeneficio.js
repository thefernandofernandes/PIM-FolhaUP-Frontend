import React, { useState } from 'react';
import { addBeneficio } from '../api/beneficio';


const TelaBeneficio = ({ codigofolha }) => {
  const [beneficios, setBeneficios] = useState([{ nome: '', valor: '' }]);
  const [envio, setEnvio] = useState('');
  const handleBeneficioChange = (index, event) => {
    const newBeneficios = [...beneficios];
    newBeneficios[index][event.target.name] = event.target.value;
    setBeneficios(newBeneficios);
  };

  const handleAddBeneficio = () => {
    setBeneficios([...beneficios, { nome: '', valor: '' }]);
  };

  const handleRemoveBeneficio = (index) => {
    const newBeneficios = [...beneficios];
    newBeneficios.splice(index, 1);
    setBeneficios(newBeneficios);
  };

  const handleBeneficioSubmit = async (event) => {
    event.preventDefault(); 
    try {
      // Loop para enviar cada benefício para o backend
      for (let i = 0; i < beneficios.length; i++) {
        await addBeneficio(
          codigofolha,
          beneficios[i].nome,
          beneficios[i].valor 
        );
        setEnvio('Benefícios adicionados com sucesso');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados do benefício:', error);
    }
  };

  return (
    <div>
      <h1 className='titulo'> BENEFÍCIO </h1>
      <form onSubmit={handleBeneficioSubmit}>
        {beneficios.map((beneficio, index) => (
          <div key={index}>
            <label htmlFor={`nome${index}`}>Nome:</label>
            <input
              type="text"
              id={`nome${index}`}
              name="nome"
              value={beneficio.nome}
              onChange={(event) => handleBeneficioChange(index, event)}
            />
            <label htmlFor={`valor${index}`}>Valor:</label>
            <input
              type="text"
              id={`valor${index}`}
              name="valor"
              value={beneficio.valor}
              onChange={(event) => handleBeneficioChange(index, event)}
            />
            <button type="button" onClick={() => handleRemoveBeneficio(index)}>Remover</button>
          </div>
        ))}
        <button type="button" onClick={handleAddBeneficio}>Adicionar Benefício</button>
        <button type="submit" className="btnSalvar">Salvar Benefícios</button>
        {envio && <p>{envio}</p>}
        <p>Adicionar Beneficio: Incluir um novo beneficio. </p>
        <p>Salvar Beneficio: Atenção: Não aperte SALVAR até adicionar todos os beneficios. </p>
      </form>
    </div>
  );
};

export default TelaBeneficio;
