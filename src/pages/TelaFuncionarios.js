import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/NavBarTelaFuncionarios';
import ListaFuncionarios from '../components/ListaFuncionarios'; 
import EditFuncionarioModal from '../components/EditFuncionarioModal'; 
import '../styles/TelaFuncionarios.css';
import { getFuncionarios, deleteFuncionario, updateFuncionario } from '../api/funcionario';  

const TelaFuncionarios = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [error, setError] = useState('');
  const [envio, setEnvio] = useState('');
  const location = useLocation();
  const { cnpj } = location.state || {}; 
  const [showEditModal, setShowEditModal] = useState(false);
  const [funcionarioToEdit, setFuncionarioToEdit] = useState(null);
  
  const fetchFuncionariosData = async () => {
    if (!cnpj) {
      setError('CNPJ não fornecido');
      return;
    }

    try {
      const funcionariosData = await getFuncionarios(cnpj);
      setFuncionarios(funcionariosData);
      if (!funcionariosData || funcionariosData.length === 0) {
        setError('Nenhum funcionário cadastrado');
      }
    } catch (error) {
      setError(error.message || 'Erro ao buscar funcionários');
    }
  };

  // Chamada inicial ao montar o componente 
  useEffect(() => {
    fetchFuncionariosData();
  }, []); 
  

  const handleEdit = async (funcionario) => {
    try {
      // Abre o modal de edição com os detalhes do funcionário selecionado
      setFuncionarioToEdit(funcionario);
      setShowEditModal(true);
    } catch (error) {
      setError(error.message || 'Erro ao editar funcionário');
    }
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleSaveEditModal = async (funcionario) => {
    try {
      // Lógica para editar o funcionário
      await updateFuncionario(funcionario.cpf, funcionario);
      // Atualiza a lista de funcionários após a edição
      const funcionariosAtualizados = await getFuncionarios(cnpj);
      setFuncionarios(funcionariosAtualizados);
      setEnvio('Funcionário editado com sucesso.');
      setShowEditModal(false); // Fecha o modal após a edição
    } catch (error) {
      setError(error.message || 'Erro ao editar funcionário');
    }
  };

  const handleDelete = async (cpf) => {
    try {
      // Lógica para excluir o funcionário
      await deleteFuncionario(cpf);
      // Atualiza a lista de funcionários após a exclusão
      const funcionariosAtualizados = await getFuncionarios(cnpj);
      setFuncionarios(funcionariosAtualizados); 
      setEnvio('Funcionário excluido com sucesso.');
    } catch (error) {
      setError(error.message || 'Erro ao excluir funcionário');
    }
  };

  return (
    <div className='TelaFuncionarios'>
      <Navbar cnpj={cnpj} />
      <p></p>
      {error && <p>{error}</p>}
      <p></p>
      <h1 className='titulo'>Consultar Funcionarios</h1>
      <ListaFuncionarios funcionarios={funcionarios} onEdit={handleEdit} onDelete={handleDelete} />
      {/* Modal de edição de funcionário */}
      <EditFuncionarioModal
        show={showEditModal}
        onClose={handleCloseEditModal}
        onSave={handleSaveEditModal}
        funcionario={funcionarioToEdit}
      />
      {envio && <p>{envio}</p>}
    </div>
  );
};

export default TelaFuncionarios;
