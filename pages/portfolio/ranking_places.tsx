import Head from 'next/head';
import { FaGithub } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';


import {
  Container,
  ButtonContainer,
} from '../../styles/portfolio/portfolio_pages/styles';
import Button from '../../components/Button';

export default function Ranking_Places(): JSX.Element {
  return (
    <>
      <Head>
        <title>Ranking Places | Portfolio | Oscar Gross</title>
        <meta
          name="og:title"
          property="og:title"
          content="Ranking Places"
        />
        <meta
          name="description"
          content="Aplicativo mobile híbrido feito com React Native, Redux e Firebase"
        />
      </Head>
      <Container>
        <h1>Ranking Places</h1>
        <img src="/assets/ranking_places.png" alt="Logo App Ranking Places" />
        <strong>
          - Projeto:
          <span> Desenvolvimento de um Site</span>
        </strong>
        <strong>
          - Função:
          <span> Desenvolvedor</span>
        </strong>       
        <strong>
          - Tecnologias do Frontend:
          <span> React</span>
        </strong>
        <strong>
          - Hospedagem:
          <span> Netlify</span>
        </strong>
        <strong>
          - Banco:
          <span> Firebase</span>
        </strong>
      
        <strong><br />
          - Contexto:
          <span>
            {' '}
            Site criado na graduação para relatar sua experiência em locais anonimamente. É possivel visualizar todas as opiniões
             já relatadas por todos os usuários, adicionar novos lugares, e opinar sobre algum local, além de editar ou deletar suas opiniões, caso troque após nova experiência 
             no local.
          </span>
        </strong>
        <strong><br />
          - Descrição técnica:
          <span>
            {' '}
            Utilizado React no frontEnd, RealTime Database e Authentication do Firebase, controle de sessão, local storage no login e deploy no Netlify.
          </span>
        </strong>
        <ButtonContainer>
          <Button link="https://github.com/oscargross/React-Ranking">
            <FaGithub size={25} color="#fff" />
            Código
          </Button>
          <Button link="https://react-ranking.netlify.app/#/">
            <BiWorld size={25} color="#fff" />
            Site
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
}
