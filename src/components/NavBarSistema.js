import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBarSistema.css';
export { Navbar };

const Navbar = ({ cnpj }) => {
  const navigate = useNavigate();

  const abrirTelaFuncionarios = () => {
    navigate('/tela-funcionarios', { state: { cnpj } });
  };

  const abrirTelaDepartamentos = () => {
    navigate('/tela-departamentos', { state: { cnpj } });
  };

  const abrirTelaFolhaPagamentos = () => {
    navigate('/tela-folha-de-pagamento', { state: { cnpj } });
  };

  const confirmarSaida = () => {
    if (window.confirm('Tem certeza que deseja sair?')) {
      navigate('/');
    }
  };


  return (
    <nav className='Navbar'>
      
        <li>
          <button className='btnEnviar' onClick={abrirTelaFuncionarios}>
            Funcionários
          </button>
        </li>
        <li>
          <button className='btnEnviar' onClick={abrirTelaDepartamentos}>
            Departamentos
          </button>
        </li>
        <li>
          <button className='btnEnviar' onClick={abrirTelaFolhaPagamentos}>
            Folha de Pagamento
          </button>
        </li>
        <li>
          <button className='btnEnviar' onClick={confirmarSaida}>
            Sair
          </button>
        </li>
      
    </nav>
  );
};


export default Navbar;
