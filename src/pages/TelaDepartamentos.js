import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ListaDepartamentos from '../components/ListaDepartamentos';
import '../styles/TelaDepartamentos.css';
import { Navbar } from '../components/NavBarTelaDepartamentos';
import { getDepartamentos, deleteDepartamentos, updateDepartamentos } from '../api/departamento'; // Importe as funções da chamada da API para departamentos
import EditDepartamentoModal from '../components/EditDepartamentoModal';

const TelaDepartamentos = () => {
  const [departamentos, setDepartamentos] = useState([]);
  const [error, setError] = useState('');
  const [envio, setEnvio] = useState('');
  const location = useLocation();
  const { cnpj } = location.state || {};
  const [showEditModal, setShowEditModal] = useState(false);
  const [departamentoToEdit, setDepartamentoToEdit] = useState(null);
  

  const fetchDepartamentosData = async () => {
    if (!cnpj) {
      setError('CNPJ não fornecido');
      return;
    }

    try {
      const departamentosData = await getDepartamentos(cnpj);
      setDepartamentos(departamentosData);
      if (!departamentosData || departamentosData.length === 0) {
        setError('Nenhum departamento cadastrado');
      }
    } catch (error) {
      setError(error.message || 'Erro ao buscar departamentos');
    }
  };

  useEffect(() => {
    fetchDepartamentosData();
  }, []); 

  const handleEdit = async (departamento) => {
    try {
      // Abre o modal de edição com os detalhes do departamento selecionado
      setDepartamentoToEdit(departamento);
      setShowEditModal(true);
    } catch (error) {
      setError(error.message || 'Erro ao editar departamento'); 
    }
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleSaveEditModal = async (departamento) => {
    try {
      // Lógica para editar o funcionário
      await updateDepartamentos(departamento.codigodepartamento, departamento);
      // Atualiza a lista de funcionários após a edição
      const departamentosAtualizados = await getDepartamentos(cnpj);
      setDepartamentos(departamentosAtualizados);
      setEnvio('Departamento editado com sucesso.');
      setShowEditModal(false); // Fecha o modal após a edição
    } catch (error) {
      setError(error.message || 'Erro ao editar departamento');
    }
  };

  const handleDelete = async (codigodepartamento) => {
    try {
      // Confirmação antes da exclusão
      const confirmDelete = window.confirm("Tem certeza que deseja excluir este departamento? Isso também excluirá os funcionários associados a este departamento.");
  
      if (confirmDelete) {
        // Lógica para excluir o departamento
        await deleteDepartamentos(codigodepartamento);
        // Atualiza a lista de funcionários após a exclusão
        const departamentosAtualizados = await getDepartamentos(cnpj);
        setDepartamentos(departamentosAtualizados); 
        setEnvio('Departamento excluido com sucesso.');
      } else {
        setEnvio('Exclusão do departamento cancelada.');
      }
    } catch (error) {
      setError(error.message || 'Erro ao excluir departamento');
    }
  };

  return (
    <div className='TelaDepartamentos'>
      <Navbar cnpj={cnpj} />
      <p></p>
      {error && <p>{error}</p>}
      <p></p>
      <h1 className='titulo'>Consultar Departamentos</h1>
      <ListaDepartamentos departamentos={departamentos} onEdit={handleEdit} onDelete={handleDelete} />
      {/* Modal de edição de funcionário */}
      <EditDepartamentoModal
        show={showEditModal}
        onClose={handleCloseEditModal}
        onSave={handleSaveEditModal}
        departamento={departamentoToEdit}
      />
      {envio && <p>{envio}</p>}
    </div>
  );
};

export default TelaDepartamentos;
