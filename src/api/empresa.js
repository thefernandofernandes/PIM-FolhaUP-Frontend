import axios from 'axios';

const backendURL = "http://localhost:3333"; 

export const logarEmpresa = async (email, senha) => {
  try {
    const response = await axios.post(`${backendURL}/login`, {
      email,
      senha,
    });

    return response.data;
  } catch (error) {
    throw new Error('Email ou Senha incorretos. Por favor, verifique suas credenciais.');
  }
};

export const getEmpresa = async (cnpj) => {
  try {
    const response = await axios.get(`${backendURL}/empresas/``${cnpj}`,{
    });
    return response.data; 
  } catch (error) {
    throw new Error('Erro ao buscar dados da empresa.');
  }
};
