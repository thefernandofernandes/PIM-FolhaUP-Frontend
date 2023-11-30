
import React from 'react';

function ListaDescontos({ descontos, onEdit, onDelete }) {
  return (
    <div>
      <h2>Lista de Descontos</h2>
      <ul>
        {descontos.map(desconto => (
          <li key={desconto.codigofolha}>
            {desconto.nome}
            <button onClick={() => onEdit(desconto)}>Editar</button>
            <button onClick={() => onDelete(desconto.codigofolha)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDescontos;
