import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/NavBarSistema';
import '../styles/TelaFuncionarios.css';
import { getFuncionarios,addFuncionario } from '../api/funcionario';
import AdicionarFuncionario from '../components/AdicionarFuncionario';

const TelaAdicionarFuncionario = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [error, setError] = useState('');
  const [envio, setEnvio] = useState('');
  const location = useLocation();
  const { cnpj } = location.state || {};

    const fetchFuncionariosData = async () => {
    if (!cnpj) {
      setError('CNPJ não fornecido');
      return;
    }
 
  };

  // Chamada inicial ao montar o componente 
  useEffect(() => {
    fetchFuncionariosData();
  }, [cnpj]); 
  

  const handleAdd = async (cpf,
    matricula,
    cnpj, 
    codigodepartamento, 
    nome, 
    endereco, 
    salario,
    cargo,
    dataadmissao,
    datanascimento,
    telefone,
    email ) => {
       
    try {
      // Chamada para adicionar funcionário
      await addFuncionario(cpf,
        matricula,
        cnpj, 
        codigodepartamento, 
        nome, 
        endereco, 
        salario,
        cargo,
        dataadmissao,
        datanascimento,
        telefone,
        email );
        alert('Funcionário adicionado com sucesso.');
      setEnvio('Funcionário adicionado com sucesso.');
    } catch (error) {
      setError(error.message || 'Erro ao adicionar funcionário');
    }
  }; 
  
  return (
    <div className='TelaAdicionarFuncionario'>
      <Navbar cnpj={cnpj} />
      
      <h1 className='titulo'>Adicionar Funcionário</h1>
      <AdicionarFuncionario funcionarios={funcionarios} onAdd={handleAdd}/>
      {envio && <p>{envio}</p>}
      {error && <p>{error}</p>} 
    </div>
  );
};

export default TelaAdicionarFuncionario;
