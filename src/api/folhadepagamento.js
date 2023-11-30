
import axios from 'axios';

const backendURL = "http://localhost:3333"; 

export const getFolhas = async (cpf) => {
    try {
        const response = await axios.get(`${backendURL}/folhas-cadastrados/${cpf}`);
        return response.data.folhadepagamento;
    } catch (error) {
        throw new Error('Erro ao buscar funcionários');
    }
};

export const getFolha = async (codigofolha) => {
  try {
      const response = await axios.get(`${backendURL}/folhadepagamentos/${codigofolha}`);
      return response.data.folhadepagamento;
  } catch (error) {
      throw new Error('Erro ao buscar funcionários');
  }
};
  
export const addFolha = async (cpf, mes,ano,diastrabalho,salario) => {
    try {
        const response = await axios.post(`${backendURL}/folhadepagamento`, {
          cpf,
          mes,
          ano,
          diastrabalho,
          salario,
        });
    
        if (response.status === 200) {
          return response.data.codigofolha;
        } else {
          throw new Error('Erro ao salvar os dados.');
        }
      } catch (error) {
        throw new Error('Erro ao enviar os dados:', error);
      }
    
}

export const updateFolha = (id, folhadepagamento) => {
    return axios.put(`${backendURL}/folhadepagamento/${id}`, folhadepagamento);
};

export const deleteFolha = (codigofolha) => {
    return axios.delete(`${backendURL}/folhadepagamento/${codigofolha}`);
};

export const calcularFolha = async (codigofolha) => {
    try {
      const response = await axios.get(`http://localhost:3000/calcular-folha/${codigofolha}`);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao obter os dados da folha de pagamento.');
    }
  };