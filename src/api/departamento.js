
import axios from 'axios';

const backendURL = "http://localhost:3333"; 

export const getDepartamentos = async (cnpj) => {
    try {
        const response = await axios.get(`${backendURL}/departamentos-cadastrados/${cnpj}`);
        return response.data.departamentos;
    } catch (error) {
        throw new Error('Nenhum departamento encontrado. Clique em Cadastrar Departamento');
    }
};
export const addDepartamentos = (departamento) => {
    return axios.post(`${backendURL}/departamento`, departamento);
};

export const updateDepartamentos = (codigodepartamento, departamento) => {
    return axios.put(`${backendURL}/departamento/${codigodepartamento}`, departamento);
};

export const deleteDepartamentos = (codigodepartamento) => {
    return axios.delete(`${backendURL}/departamento/${codigodepartamento}`);
};