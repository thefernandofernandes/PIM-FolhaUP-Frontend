//Importa os módulos
import React from 'react';
//Importa o estilo da pagina TelaHome
import '../styles/TelaHome.css'; 
//Importa o componente NavBar como barra de nagevação
import NavBar from '../components/NavBarHome';

const FolhaUp = () => {
  return (
    <div className="folhaup-container">
      {/* Barra de navegação */}
      <NavBar/>

      {/* Sobre a FolhaUp */}
      <section id="sobre" className="section sobre-section">
        <div className="conteudo">
          <h2>FolhaUp</h2>
        </div>
      </section>

      {/* Informações sobre a FolhaUp */}
      <section id="sobre" className="section sobre-section">
        <div className="dados">
          <h2>Sobre a FolhaUp</h2>
          <h2>Por que Escolher a FOLHA UP?</h2>
          <p>Seja parte da revolução no mundo dos Recursos Humanos, onde a eficiência encontra a inovação.</p>
          <p>Tomar decisões informadas nunca foi tão fácil.</p>
        </div>
      </section>

      {/* Informações sobre serviços oferecidos */}
      <section id="servicos" className="section servicos-section">
        <div className="dados">
          <h2>Nossos Serviços</h2>
          <ul>
            <li>Gerenciamento de Funcionários</li>
            <li>Gerenciamento de Departamentos</li>
            <li>Gerenciamento de Folha de Pagamento</li>
            <li>Emissão de Folha de Pagamento</li>
          </ul>
        </div>
      </section>

      {/* Informações sobre a equipe */}
      <section id="equipe" className="section equipe-section">
        <div className="dados">
          <h2>Nossa Equipe</h2>
          <div className="membros-equipe">
            {/* Membros da equipe */}
            <div className="membro">FERNANDO FERNANDES DOS SANTOS MATRÍCULA: F34GED-3</div>
            <div className="membro">JOÃO VITOR DE MENEZES MATRÍCULA: G09JFD-7</div>
            <div className="membro">LEONARDO MURILO RODRIGUES DOS SANTOS MATRÍCULA: N01514-4o</div>
            <div className="membro">LUCAS HONORATO DA SILVA MATRÍCULA: N038HJ-0</div>
            <div className="membro">LUIZ HENRIQUE DOS PASSOS SILVA MATRÍCULA: N01008-8</div>
            <div className="membro">MARCOS DE MELO BARRETO MATRÍCULA: RA: N0156J9</div>
            <div className="membro">WILSON CARDOSO DA SILVA JUNIOR MATRÍCULA: G700DB-8</div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="direitos">
        <p> 2023 FolhaUp - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default FolhaUp;