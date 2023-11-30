// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBarSistema.css';
export { Navbar };
const Navbar = ({ cnpj }) => {
  const navigate = useNavigate();

  const abrirTelaAdicionarFuncionario = () => {
    navigate('/tela-adicionar-funcionario', { state: { cnpj } });
  };

  const confirmarSaida = () => {
    if (window.confirm('Tem certeza que deseja sair?')) {
      navigate('/');
    }
  };

  const handleVoltar = () => {
    navigate(-1); // Navega de volta para a página anterior
  };

  return (
    <nav className='Navbar'>
        <li>
          <button className='btnEnviar' onClick={abrirTelaAdicionarFuncionario}>
            Cadastrar Funcionario
          </button>
        </li>
        <li>
          <button className='btnEnviar' onClick={confirmarSaida}>
            Sair
          </button>
        </li>
        <li>
          <button className= "btnEnviar" onClick={handleVoltar}>
            Voltar
            </button>
        </li>
    </nav>
  );
};

export default Navbar;

