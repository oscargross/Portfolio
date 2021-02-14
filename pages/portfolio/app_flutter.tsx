import Head from 'next/head';
import { FaGithub } from 'react-icons/fa';
import {
  ImgCertificates
} from '../../styles/cursos/styles';
import {
  Container,
  ButtonContainer,
} from '../../styles/portfolio/portfolio_pages/styles';
import Button from '../../components/Button';

export default function App_Flutter(): JSX.Element {
  return (
    <>
      <Head>
        <title>App_Flutter | Portfolio | Oscar Gross</title>
        <meta
          name="og:title"
          property="og:title"
          content="App_Flutter"
        />
        <meta
          name="description"
          content="Aplicativo mobile híbrido feito com Flutter"
        />
      </Head>
      <Container>
        <h1>Aplicativo híbrido em Flutter</h1>
        <img src="/assets/portfolio_images/flutter_services.png" alt="Logo App Agendamento de Serviços" />
        <strong>
          - Projeto:
          <span> Desenvolvimento de aplicativo mobile híbrido</span>
        </strong>
        <strong>
          - Função:
          <span> Desenvolvedor</span>
        </strong>
        <strong>
          - Tecnologias do Frontend:
          <span> Flutter / Dart</span>
        </strong>
        <strong>
          - Banco:
          <span> Firebase</span>
        </strong>

        <strong><br />
          - Contexto:
          <span>
            {' '}
            Facilitando a contratação de serviços, o app conecta clientes e fornecedores das mais diversas áreas de atuação. 
            Como cliente é possível pesquisar por tipo de serviço ou cidade que necessita. Já como profissional é possível 
            cadastrar todos os serviços que disponibiliza, bem como seu preço e dias disponíveis sendo necessário o aceite para 
            efetivação do contrato. Todo o histórico fica salvo para possiveis recontratações.</span>
        </strong>
        <strong><br />
          - Descrição técnica:
          <span>
            {' '}
            Foi executado em Flutter/Dart, no Android Studio, com gerenciamento de login e cadastro via Authentication do Firebase
             e Cloud Firestone como banco NoSQL dos dados de serviços, cidades, agendamentos, cadastro.
          </span>
        </strong>
        <ButtonContainer>
          <Button link="https://github.com/oscargross/Flutter-Servicos">
            <FaGithub size={25} color="#fff" />
            Código
          </Button>

        </ButtonContainer>
      </Container>
      <ImgCertificates>
        <img src="/assets/portfolio_images/using_portfolio_images/flutter_services2.png" alt="Print aplicação Flutter Serviços App" />
        <img src="/assets/portfolio_images/using_portfolio_images/flutter_services3.png" alt="Print aplicação Flutter Serviços App" />
        <img src="/assets/portfolio_images/using_portfolio_images/flutter_services4.png" alt="Print aplicação Flutter Serviços App" />
        <img src="/assets/portfolio_images/using_portfolio_images/flutter_services5.png" alt="Print aplicação Flutter Serviços App" />
        <img src="/assets/portfolio_images/using_portfolio_images/flutter_services6.png" alt="Print aplicação Flutter Serviços App" />
      </ImgCertificates>
    </>
  );
}
