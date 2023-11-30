import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDepartamentos } from '../api/departamento';

const SelecaoDepartamentos = ({ onChange }) => {
  const [departamentos, setDepartamentos] = useState([]);
  const [selectedDepartamento, setSelectedDepartamento] = useState('');
  const location = useLocation();
  const { cnpj } = location.state || {};

  useEffect(() => {
    const fetchDepartamentos = async () => {
      try {
        const listaDepartamentos = await getDepartamentos(cnpj);
        setDepartamentos(listaDepartamentos);
      } catch (error) {
        console.error('Erro ao buscar departamentos:', error.message);
      }
    };

    if (cnpj) {
      fetchDepartamentos();
    }
  }, [cnpj]);

  const handleSelectChange = (e) => {
    const selectedValue = parseInt(e.target.value, 10); // Converte para número
    setSelectedDepartamento(selectedValue);
    onChange(selectedValue); // Passa o valor selecionado para o componente pai
  };

  return (
    <div>
      <h3>Selecione um departamento:</h3>
      <select value={selectedDepartamento} onChange={handleSelectChange}>
        <option value={0}>Departamento...</option>
        {departamentos.map((departamento) => (
          <option key={departamento.codigodepartamento} value={departamento.codigodepartamento}>
            {departamento.codigodepartamento} - {departamento.nome}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelecaoDepartamentos;