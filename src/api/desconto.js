
import axios from 'axios';

const backendURL = "http://localhost:3333"; 

export const getDescontos = async (codigofolha) => {
    try {
        const response = await axios.get(`${backendURL}/descontos/${codigofolha}`);
        return response.data.descontos;
    } catch (error) {
        throw new Error('Erro ao buscar funcionários');
    }
};

export const addDesconto = async (codigofolha, nome, valor) => {
    try {
      const response = await axios.post(`${backendURL}/descontos`, {
        codigofolha,
        nome,
        valor,
      });
  
      if (response.status === 200) {
        console.log('Desconto enviado com sucesso!');
      } else {
        throw new Error('Erro ao salvar os dados do desconto.');
      }
    } catch (error) {
      throw new Error('Erro ao enviar os dados do desconto:', error);
    }
  };

export const updateDesconto = (id, desconto) => {
    return axios.put(`${backendURL}/descontos/${id}`, desconto);
};

export const deleteDesconto = (id) => {
    return axios.delete(`${backendURL}/descontos/${id}`);
};