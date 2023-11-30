
import React from 'react';

function ListaBeneficios({ beneficios, onEdit, onDelete }) {
  return (
    <div>
      <h2>Lista de Beneficios</h2>
      <ul>
        {beneficios.map(beneficio => (
          <li key={beneficio.codigobeneficio}>
            {beneficio.nome}
            <button onClick={() => onEdit(beneficio)}>Editar</button>
            <button onClick={() => onDelete(beneficio.codigobeneficio)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaBeneficios;
