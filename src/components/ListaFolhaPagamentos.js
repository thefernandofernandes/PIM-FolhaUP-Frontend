
import React from 'react';


function ListaFolhaPagamentos({ folhadepagamentos, onEdit, onDelete }) {
  return (
    <div>
      <ul className="folhadepagamentos-list">
      {folhadepagamentos.map(folhadepagamento => (
        <li key={folhadepagamento.cpf}>
          <div className="folhadepagamento-item">
            <span>CPF: {folhadepagamento.cpf}</span>
            <span>Mês: {folhadepagamento.mes}</span>
            <span>Ano: {folhadepagamento.ano}</span>
            <span>Dias de Trabalho: {folhadepagamento.diastrabalho}</span>
            <span>Salário: {folhadepagamento.salario}</span>
            <button onClick={() => onEdit(folhadepagamento)}>Editar</button>
            <button onClick={() => onDelete(folhadepagamento.codigofolha)}>Deletar</button>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default ListaFolhaPagamentos;
