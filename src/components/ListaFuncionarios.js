
import React from 'react';
import '../styles/ListaFuncionarios.css';

function ListaFuncionarios({ funcionarios, onEdit, onDelete }) {
  return (
    <div>
      <ul className="funcionarios-list">
      {funcionarios.map(funcionario => (
        <li key={funcionario.cpf}>
          <div className="funcionario-item">
          <span>CNPJ: {funcionario.cnpj}</span>
          <span>CPF: {funcionario.cpf}</span>
            <span>Matrícula: {funcionario.matricula}</span>
            <span>Nome: {funcionario.nome}</span>
            <span>Departamento: {funcionario.codigodepartamento}</span>
            <span>Endereço: {funcionario.endereco}</span>
            <span>Salário: {funcionario.salario}</span>
            <span>Cargo: {funcionario.cargo}</span>
            <span>Data de Admissão: {funcionario.dataadmissao}</span>
            <span>Data de Nascimento: {funcionario.datanascimento}</span>
            <span>Telefone: {funcionario.telefone}</span>
            <span>Email: {funcionario.email}</span>
            <button onClick={() => onEdit(funcionario)}>Editar</button>
            <button onClick={() => onDelete(funcionario.cpf)}>Deletar</button>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default ListaFuncionarios;
