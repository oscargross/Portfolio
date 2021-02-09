import Head from 'next/head';
import { FaGithub } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';


import {
  Container,
  ButtonContainer,
} from '../../styles/portfolio/bergdaniel/styles';
import Button from '../../components/Button';

export default function Fluxo_Caixa(): JSX.Element {
  return (
    <>
      <Head>
        <title>Fluxo Caixa | Portfolio | Oscar Gross</title>
        <meta
          name="og:title"
          property="og:title"
          content="Fluxo Caixa"
        />
        <meta
          name="description"
          content="Sistema Web para controle financeiro"
        />
      </Head>
      <Container>
        <h1>Fluxo de Caixa</h1>
        <img src="/assets/logo_fluxo_de_caixa.png" alt="Logo Fluxo de Caixa" />
        <strong>
          - Projeto:
          <span> Desenvolvimento de um Blog em NextJS</span>
        </strong>
        <strong>
          - Função:
          <span> Desenvolvedor</span>
        </strong>       
        <strong>
          - Tecnologias do Frontend/Backend:
          <span> Java / Postgresql</span>
        </strong>
        <strong>
          - Hospedagem:
          <span> Heroku</span>
        </strong>
      
        <strong><br />
          - Contexto:
          <span>
            {' '}
            Projeto montado na graduação para controle de fluxo de caixa. Com cadastro e login, é possível realizar controle financeiro, com lançamentos de 
            debitos e créditos, extratos em períodos de tempo, salvar o extrato em pdf, emitir futuros gastos e gestão mensal. 
          </span>
        </strong>
        <strong><br />
          - Descrição técnica:
          <span>
            {' '}
            Sistema feito em java Spring Boot Framework - Servlets/Maven, banco Postgresql e deploy no heroku.
          </span>
        </strong>
        <ButtonContainer>
          <Button link="https://github.com/gutto-ortolan/fluxo-caixa-java-web">
            <FaGithub size={25} color="#fff" />
            Código
          </Button>
          <Button link="https://fluxocaixaapp.herokuapp.com/">
            <BiWorld size={25} color="#fff" />
            Site
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
}
