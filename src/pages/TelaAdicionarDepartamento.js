import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/NavBarSistema';
import '../styles/TelaDepartamentos.css';
import { addDepartamentos } from '../api/departamento';
import AdicionarDepartamento from '../components/AdicionarDepartamento';
import '../styles/AdicionarDepartamento.css';

const TelaAdicionarDepartamento = () => {
  const [departamentos, setDepartamentos] = useState([]);
  const [error, setError] = useState('');
  const [envio, setEnvio] = useState('');
  const location = useLocation();
  const { cnpj } = location.state || {};

    const fetchDepartamentosData = async () => {
    if (!cnpj) {
      setError('CNPJ não fornecido');
      return;
    }
 
  };

  // Chamada inicial ao montar o componente 
  useEffect(() => {
    fetchDepartamentosData();
  }, [cnpj]); 
  
  const handleAdd = async (
    cnpj, 
    nome) => {
       
    try {
      // Chamada para adicionar funcionário
      await addDepartamentos(
        cnpj, 
        nome );
        alert('Departamento adicionado com sucesso.');
      setEnvio('Departamento adicionado com sucesso.');
    } catch (error) {
      setError(error.message || 'Erro ao adicionar dep');
    }
  }; 
  
  return (
    <div className='TelaAdicionarDepartamento'>
      <Navbar cnpj={cnpj} />
      {error && <p>{error}</p>} 
      <h1 className='titulo'>Adicionar Departamento</h1>
      <AdicionarDepartamento departamentos={departamentos} onAdd={handleAdd}/>
      {envio && <p>{envio}</p>}
    </div>
  );
};

export default TelaAdicionarDepartamento;
