import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaHome from './pages/TelaHome';
import TelaLogin from './pages/TelaLogin';
import TelaInicial from './pages/TelaInicial';
import TelaFuncionarios from './pages/TelaFuncionarios';
import TelaDepartamentos from './pages/TelaDepartamentos';
import TelaFolha from './pages/TelaFolha';
import TelaAdicionarFuncionario from './pages/TelaAdicionarFuncionario';
import TelaAdicionarDepartamento from './pages/TelaAdicionarDepartamento';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaHome />} />
        <Route path="/logar" element={<TelaLogin />} />
        <Route path="/tela-inicial" element={<TelaInicial />} />
        <Route path="/tela-funcionarios" element={<TelaFuncionarios />} />
        <Route path="/tela-departamentos" element={<TelaDepartamentos />} />
        <Route path="/tela-folha-de-pagamento" element={<TelaFolha />} />
        <Route path="/tela-adicionar-funcionario" element={<TelaAdicionarFuncionario />} />
        <Route path="/tela-adicionar-departamento" element={<TelaAdicionarDepartamento />} />
      </Routes>
    </Router>
  );
};

export default App;
