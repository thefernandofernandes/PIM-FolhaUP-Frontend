
import axios from 'axios';

const backendURL = "http://localhost:3333"; 


export const getFuncionarios = async (cnpj) => {
    try {
        const response = await axios.get(`${backendURL}/funcionarios-cadastrados/${cnpj}`);
        return response.data.funcionarios;
    } catch (error) {
        throw new Error('Nenhum funcionário cadastrado. Clique em Cadastrar Funcionário.');
    }
};

export const getFuncionario = async (cpf) => {
    try {
        const response = await axios.get(`${backendURL}/funcionario-folha/${cpf}`);
        return response.data.funcionario;
    } catch (error) {
        throw new Error('Erro ao buscar funcionário');
    }
};

export const addFuncionario = async (funcionario) => {
    try {
      const response = await axios.post(`${backendURL}/funcionarios`, funcionario);
  
      if (response.status === 200) {
        console.log('Funcionário adicionado com sucesso!');
      } else {
        throw new Error('Erro ao salvar os dados do funcionário.');
      }
    } catch (error) {
      throw new Error('Erro ao enviar os dados do funcionário:', error);
    }
  };

export const updateFuncionario = (id, funcionario) => {
    return axios.put(`${backendURL}/funcionarios/${id}`, funcionario);
};

export const deleteFuncionario = (id) => {
    return axios.delete(`${backendURL}/funcionarios/${id}`);
};
