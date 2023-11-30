// Importa os módulos
import React from 'react';
import { useLocation } from 'react-router-dom';
//Importa o estilo da TelaInicial
import '../styles/TelaInicial.css';
//Importa o componente NavBar como barra de nagevação
import NavBar from '../components/NavBarSistema';

const TelaInicial = () => {
  // Obtém a localização atual
  const location = useLocation();
  // Pega o CNPJ da localização
  const { cnpj } = location.state || {};
   
  return ( 
    <div className="body">
      {/* Barra de navegação com o CNPJ */}
      <NavBar cnpj={cnpj} />
      {/* Cabeçalho */}
      <div className="headerHome">
        <div>
          <h1>FOLHA UP</h1>
          {/* Mostra o CNPJ */}
          <p>CNPJ: {cnpj}</p> 
          <p>Transformando Recursos Humanos com Inovação Automatizada</p>
        </div>
      </div>

      {/* Container principal */}
      <div className="container">
        {/* Bloco de texto sobre a FOLHA UP */}
        <div className="Textos">
          <h2>Por que Escolher a FOLHA UP?</h2>
          <p>Seja parte da revolução no mundo dos Recursos Humanos, onde a eficiência encontra a inovação.</p>
          <p>Automatização Avançada: Nossa plataforma automatiza tarefas tediosas, permitindo que sua equipe se concentre no que realmente importa: estratégias de gestão de folha de pagamento. Tomar decisões informadas nunca foi tão fácil.</p>
        </div>

        {/* Bloco de texto sobre os serviços */}
        <div className="Textos">
          <h2>Nossos Serviços</h2>
          <div className="services">
            {/* Serviço 1: FolhaUp */}
            <div className="service">
              <h3>FolhaUp</h3>
              <p>O FolhaUp é uma abordagem de melhoria de processos que fornecemos para empresas elementos essenciais de uma folha de pagamento, para que cumpram com seus deveres com os seus funcionários.</p>
            </div>
            {/* Serviço 2: Folha de Pagamento */}
            <div className="service">
              <h3>Folha de Pagamento</h3>
              <p>Folha de pagamento pode ser classificada como a organização dos registros financeiros de uma empresa e o total de todas as remunerações que uma empresa deve pagar aos seus funcionários por um determinado período de tempo ou em uma determinada data, bem como uma lista detalhada dos funcionários, e suas determinadas funções.</p>
            </div>
            {/* Serviço 3: Sistema */}
            <div className="service">
              <h3>Sistema</h3>
              <p>Um sistema de folha de pagamento manual exige que a folha de pagamento seja processada manualmente e, portanto, muito mais lenta do que um procedimento automatizado, portanto um sistema de folha de pagamento automatiza todo esse processo.</p>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <footer className="direitos">
          <p> 2023 FolhaUp - Todos os direitos reservados</p>
        </footer>

      </div>
    </div>
  );
};

export default TelaInicial;