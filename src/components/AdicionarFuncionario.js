
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import SelecaoDepartamentos from './SelecaoDepartamentos'; 
import '../styles/AdicionarFuncionario.css';

function AdicionarFuncionario({ onAdd }) {
  const [cpf, setCpf] = useState('');
  const location = useLocation();
  const { cnpj } = location.state || {};
  const [cnpjState] = useState(cnpj);
  const [nome, setNome] = useState('');      
  const [matricula, setMatricula] = useState('');// Matricula
  const [cargo, setCargo] = useState(''); // Cargo
  const [endereco, setEndereco] = useState('');  // Endereco
  const [salario, setSalario] = useState('');  // Salário Base
  const [codigodepartamento, setCodigoDepartamento] = useState(''); // Departamento
  const [dataadmissao, setDataAdmissao] = useState('');
  const [datanascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = () => {
    // Verificação básica para o nome e o CPF.     
    if (nome && cpf) {
      onAdd({ 
        cpf,
        matricula,
        cnpj, 
        codigodepartamento, 
        nome, 
        endereco, 
        salario,
        cargo,
        dataadmissao,
        datanascimento,
        telefone,
        email 
      });

      // Reset dos campos após o cadastro
      setCpf('');
      setNome('');
      setMatricula('');
      setCargo('');
      setEndereco('');
      setSalario('');
      setCodigoDepartamento('');
      setDataAdmissao('');
      setDataNascimento('');
      setTelefone('');
      setEmail('');
    }
  };

  const handleDepartamentoChange = (value) => {
    setCodigoDepartamento(value); // Atualiza o estado do código do departamento
  };


  return (
    <div className="form-container">
      <input type="number" placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} />
      <input type="number" placeholder="cnpj" value={cnpjState} readOnly />
      <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
      <input type="number" placeholder="Matricula" value={matricula} onChange={e => setMatricula(e.target.value)} />
      <input type="text" placeholder="Cargo" value={cargo} onChange={e => setCargo(e.target.value)} />
      <p>Data de Admissão:  
      <input type="date" placeholder="Dataadmissao" value={dataadmissao} onChange={e => setDataAdmissao(e.target.value)} />
      </p>
      <p>Data de Nascimento:  
      <input type="date" placeholder="DataNascimento" value={datanascimento} onChange={e => setDataNascimento(e.target.value)} />
      </p>
      <input type="text" placeholder="Salário" value={salario} onChange={e => setSalario(e.target.value)} />
      <SelecaoDepartamentos onChange={handleDepartamentoChange} />
      <input type="text" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="text" placeholder="Endereco" value={endereco} onChange={e => setEndereco(e.target.value)} />
      
      <button id = "BTN" onClick={handleSubmit}>Cadastrar</button>
    </div>
  );
}


export default AdicionarFuncionario;
