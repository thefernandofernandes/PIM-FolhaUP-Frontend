import React, { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../styles/TelaFolha.css';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/NavBarSistema';
import TelaBeneficio from './TelaBeneficio';
import TelaDesconto from './TelaDesconto';
import { addFolha, calcularFolha } from '../api/folhadepagamento';
import { getFuncionarios } from '../api/funcionario';
import SelecaoFuncionarios from '../components/SelecaoFuncionarios';

const TelaFolha = () => {
  const [cpf, setCPF] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const [erro, setError] = useState('');
  const [envio, setEnvio] = useState('');
  const beneficioRef = useRef(null);
  const descontoRef = useRef(null);
  const [diastrabalho, setDiasTrabalho] = useState('');
  const [salario, setSalario] = useState('');
  const location = useLocation();
  const { cnpj } = location.state || {};
  
  const [codigofolha, setCodigoFolha] = useState(null);
  const isNumber = (value2) => {
    return /^[0-9]+$/.test(value2);
  };

  const handleSelecaoFuncionario = (selectedCPF) => {
    setCPF(selectedCPF);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !cpf ||
      !mes ||
      !ano ||
      !diastrabalho ||
      !salario ||
      !isNumber(cpf) ||
      !isNumber(mes) ||
      !isNumber(ano) ||
      !isNumber(diastrabalho) ||
      !isNumber(salario)
    ) {
      setError('Por favor, preencha todos os campos com números válidos.');
      return;
    }

    setError('');

    try {
      // Verifica se o funcionário existe antes de cadastrar a folha de pagamento
      const funcionarios = await getFuncionarios(cnpj);
      const funcionarioExiste = funcionarios.some((funcionario) => funcionario.cpf === cpf);
  
      if (!funcionarioExiste) {
        setError('Funcionário não encontrado para o CPF informado.');
        return;
      }
  
      // Caso o funcionário exista, cadastra a folha de pagamento
      const codigofolha = await addFolha(cpf, mes, ano, diastrabalho, salario);
      setCodigoFolha(codigofolha);
      setEnvio('Folha cadastrada com sucesso! Role a tela para adicionar eventuais beneficios e descontos. ');
    } catch (error) {
      console.error('Erro ao enviar os dados:', error.message);
    }
  };

  const handleGeneratePDF = async () => {
    try {
      const data = await calcularFolha(codigofolha);
      const { totalDescontos, totalBeneficios } = data;
      const beneficioConvertido = parseFloat(totalBeneficios);
      const descontoConvertido = parseFloat(totalDescontos);
      const salarioConvertido = parseFloat(salario);
      const salarioLiquido = (salarioConvertido + beneficioConvertido) - descontoConvertido;
  
      const doc = new jsPDF();
  
      // Adicionar o conteúdo ao PDF
      doc.text('Folha de Pagamento', 14, 15);
      doc.text(`CPF: ${cpf}`, 14, 30);
      doc.text(`Mês: ${mes}`, 14, 40);
      doc.text(`Ano: ${ano}`, 14, 50);
      doc.text(`Dias de Trabalho: ${diastrabalho}`, 14, 60);
      doc.text(`Salário Base: ${salario}`, 14, 70);
  
      doc.text(`Total de Benefícios: ${beneficioConvertido}`, 14, 140);
      doc.text(`Total de Descontos: ${descontoConvertido}`, 14, 150);
      doc.text(`Salário Líquido: ${salarioLiquido}`, 14, 160);
      // Salvar o PDF
      doc.save(`Folha-de-Pagamento-Completa-Mes-${mes}-Ano-${ano}-CPF-${cpf}.pdf`);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  
  return (
    <div>
      <Navbar cnpj={cnpj} />
      <div>
        <h1 className='titulo'> FOLHA DE PAGAMENTO </h1>
        <form onSubmit={handleSubmit}>
          <div>
            {/* Campos do formulário */}
          <SelecaoFuncionarios onChange={handleSelecaoFuncionario} />
          </div>
        <div>
          <label htmlFor="mes">Mês:</label>
          <input
            type="text"
            id="mes"
            value={mes}
            onChange={(e) => setMes(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ano">Ano:</label>
          <input
            type="text"
            id="ano"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="diasTrabalho">Dias de Trabalho:</label>
          <input
            type="text"
            id="diasTrabalho"
            value={diastrabalho}
            onChange={(e) => setDiasTrabalho(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Salario"> Salario:</label>
          <input
            type="text"
            id="Salario"
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
          />
        </div>
        <p></p>
      {erro && <p>{erro}</p>}
      {envio && <p>{envio}</p>}
      <p></p>
          <button type="submit">Salvar</button>
        </form>
      </div>
     
      <div>
      <TelaBeneficio ref={beneficioRef} codigofolha={codigofolha} />
      <p></p>
      <TelaDesconto ref={descontoRef} codigofolha={codigofolha} />
    </div>
    <button onClick={handleGeneratePDF}>Gerar PDF</button>
    </div>
    
  );
};

export default TelaFolha;
