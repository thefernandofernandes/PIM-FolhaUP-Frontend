// Importa os módulos 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Importa o estilo da página de Login
import '../styles/TelaLogin.css';
// Importa a função de logarEmpresa() 
import { logarEmpresa } from '../api/empresa';

// Componente funcional LoginForm
const LoginForm = () => {
  // Declaração dos estados para senha, email, erro e para a navegação
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState(''); 
  const navigate = useNavigate(); // Função para navegar para TelaInicial

  // Função que lida com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    try {
      // Tenta logar utilizando o que o usuário inseriu (email e senha)
      const userData = await logarEmpresa(email, senha);

      // Se o login for bem-sucedido, pega o CNPJ da empresa para exibir seus dados
      navigate('/tela-inicial', { state: { cnpj: userData.cnpj } });
    } catch (erro) {
      // Exibe a mensagem de erro
      setErro(erro.message || 'Erro ao entrar.');
    }
  };

  // Formulário para inserir email, senha e botão de Enviar
  return (
    <div className='LoginForm'>
      <p className='labelFolhaUp'>FOLHAUP </p>
      <p className='labelLogin'>LOGIN </p>
      <p></p>
      <form className='Form' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Atualiza o estado 'email'
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)} // Atualiza o estado 'senha'
        />
        <button className="btnEntrar" type="submit">Entrar</button>
      </form>
      {/* Exibe a mensagem de erro se houver */}
      {erro && <p className="mensagem-erro">{erro}</p>}
    </div>
  );
};

export default LoginForm; // Exporta o componente LoginForm
