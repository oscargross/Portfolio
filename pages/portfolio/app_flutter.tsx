import Head from 'next/head';
import { FaGithub } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';


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
        <img src="/assets/flutter_services.png" alt="Logo App Agendamento de Serviços" />
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
            Aplicativo desenvolvido na graduação para agendamento de serviços. Com cadastro e login, é possível acessar como profissional ou como cliente. Caso seja um profissional, 
            o usuário pode cadastrar novos serviços, selecionando os dias em que está disponível e valor do serviço, verifica se algum cliente quiz realizar um agendamento de algum serviço
            cadastrado e modificar dados de seu perfil. Já o usuário cliente pode pesquisar por profissionais que estejam em sua cidade, que realizam o serviço procurado 
            e nos dias disponíveis, sendo assim, pode enviar um convite para o profissional aceitar ou não um agendamento do serviço. O serviço ficará pendente até o profissional aceitá-lo. E também pode alterar 
            dados de seu perfil.</span>
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
    </>
  );
}
