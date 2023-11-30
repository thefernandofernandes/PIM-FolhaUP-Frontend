import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getFuncionarios } from '../api/funcionario';

const SelecaoFuncionarios = ({ onChange }) => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [selectedCPF, setSelectedCPF] = useState('');
  const location = useLocation();
  const { cnpj } = location.state || {};

  useEffect(() => {
    const fetchFuncionarios = async () => {
      try {
        const listaFuncionarios = await getFuncionarios(cnpj);
        setFuncionarios(listaFuncionarios);
      } catch (error) {
        console.error('Erro ao buscar funcionários:', error.message);
      }
    };

    if (cnpj) {
      fetchFuncionarios();
    }
  }, [cnpj]);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value; 
    setSelectedCPF(selectedValue);
    onChange(selectedValue); 
  };

  return (
    <div>
      <h3>Selecione um CPF:</h3>
      <select value={selectedCPF} onChange={handleSelectChange}>
        <option value="">CPF...</option>
        {funcionarios.map((funcionario) => (
          <option key={funcionario.cpf} value={funcionario.cpf}>
            {funcionario.cpf}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelecaoFuncionarios;
