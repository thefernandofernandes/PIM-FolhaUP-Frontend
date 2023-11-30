import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBarHome.css'; // Importe o arquivo CSS com os estilos

const Navbar = () => {
  const navigate = useNavigate();

  const abrirTelaLogin = () => {
    navigate('/logar');
  };

  return (
    <nav className="Navbar">
      <ul className="nav-list">
        <p></p>
        <p></p>
          <button className="btnEntrar" onClick={abrirTelaLogin}>
            ENTRAR
          </button>
      </ul>
    </nav>
  );
};

export default Navbar;