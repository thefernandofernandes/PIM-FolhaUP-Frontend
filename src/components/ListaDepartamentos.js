import React from 'react';
import '../styles/ListaDepartamentos.css';

function ListaDepartamentos({ departamentos, onEdit, onDelete }) {
  return (
    <div>
      <ul className="departamentos-list">
      {departamentos.map(departamento => (
        <li key={departamento.codigodepartamento}>
          <div className="departamento-item">
            <span>CNPJ: {departamento.cnpj}</span>
            <span>Nome: {departamento.nome}</span>
            <span>Código do Departamento: {departamento.codigodepartamento}</span>
            
            <button onClick={() => onEdit(departamento)}>Editar</button>
            <button onClick={() => onDelete(departamento.codigodepartamento)}>Deletar</button>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default ListaDepartamentos;

