import React, { useState } from 'react';
import { addDesconto } from '../api/desconto';

const TelaDesconto = ({ codigofolha }) => {
  const [descontos, setDescontos] = useState([{ nome: '', valor: '' }]);
  const [envio, setEnvio] = useState('');
  const handleDescontoChange = (index, event) => {
    const newDescontos = [...descontos];
    newDescontos[index][event.target.name] = event.target.value;
    setDescontos(newDescontos);
  };

  const handleAddDesconto = () => {
    setDescontos([...descontos, { nome: '', valor: '' }]);
  };

  const handleRemoveDesconto = (index) => {
    const newDescontos = [...descontos];
    newDescontos.splice(index, 1);
    setDescontos(newDescontos);
  };

  const handleDescontoSubmit = async (event) => {
    event.preventDefault();

    try {
      // Loop para enviar cada benefício para o backend
      for (let i = 0; i < descontos.length; i++) {
        await addDesconto(
          codigofolha,
          descontos[i].nome,
          descontos[i].valor
        );
        setEnvio('Descontos adicionados com sucesso');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados do desconto:', error);
    }
  };


  return (
    <div>
      <h1 className='titulo'> DESCONTO </h1>
      <form onSubmit={handleDescontoSubmit}>
        {descontos.map((desconto, index) => (
          <div key={index}>
            <label htmlFor={`nome${index}`}>Nome:</label>
            <input
              type="text"
              id={`nome${index}`}
              name="nome"
              value={desconto.nome}
              onChange={(event) => handleDescontoChange(index, event)}
            />
            <label htmlFor={`valor${index}`}>Valor:</label>
            <input
              type="text"
              id={`valor${index}`}
              name="valor"
              value={desconto.valor}
              onChange={(event) => handleDescontoChange(index, event)}
            />
            <button type="button" onClick={() => handleRemoveDesconto(index)}>Remover</button>
          </div>
        ))}
        <button type="button" onClick={handleAddDesconto}>Adicionar Desconto</button>
        <button type="submit" className="btnSalvar">Salvar Descontos</button>
        {envio && <p>{envio}</p>}
        <p>Adicionar Desconto: Incluir um novo desconto. </p>
        <p>Salvar Desconto: Atenção: Não aperte SALVAR até adicionar todos os descontos. </p>
      </form>
    </div>
  );
};

export default TelaDesconto;