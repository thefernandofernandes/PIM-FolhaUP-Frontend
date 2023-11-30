
import axios from 'axios';

const backendURL = "http://localhost:3333"; 

export const getBeneficios = async (codigofolha) => {
    try {
        const response = await axios.get(`${backendURL}/beneficio/${codigofolha}`);
        return response.data.beneficios;
    } catch (error) {
        throw new Error('Erro ao buscar funcionários');
    }
};


export const addBeneficio = async (codigofolha, nome, valor) => {
    try {
      const response = await axios.post(`${backendURL}/beneficio`, {
        codigofolha,
        nome,
        valor,
      });
  
      if (response.status === 200) {
        console.log('Benefício enviado com sucesso!');
      } else {
        throw new Error('Erro ao salvar os dados do benefício.');
      }
    } catch (error) {
      throw new Error('Erro ao enviar os dados do benefício:', error);
    }
  };

export const updateBeneficios = (id, beneficio) => {
    return axios.put(`${backendURL}/beneficio/${id}`, beneficio);
};

export const deleteBeneficios = (id) => {
    return axios.delete(`${backendURL}/beneficio/${id}`);
};