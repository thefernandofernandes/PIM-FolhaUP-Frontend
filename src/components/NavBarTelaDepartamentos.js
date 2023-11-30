// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBarSistema.css';
export { Navbar };
const Navbar = ({ cnpj }) => {
  const navigate = useNavigate();

  const abrirTelaAdicionarDepartamento = () => {
    navigate('/tela-adicionar-departamento', { state: { cnpj } });
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
          <button className='btnEnviar' onClick={abrirTelaAdicionarDepartamento}>
            Cadastrar Departamento
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