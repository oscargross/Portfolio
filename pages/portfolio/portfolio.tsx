import Head from 'next/head';
import { FaGithub } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';


import {
  Container,
  ButtonContainer,
} from '../../styles/portfolio/bergdaniel/styles';
import Button from '../../components/Button';

export default function Portfolio(): JSX.Element {
  return (
    <>
      <Head>
        <title>Portfolio | Portfolio | Oscar Gross</title>
        <meta
          name="og:title"
          property="og:title"
          content="Portfolio"
        />
        <meta
          name="description"
          content="Site para mostra o Portfolio Oscar Gross"
        />
      </Head>
      <Container>
        <h1>Portfolio Pessoal</h1>
        <img src="/assets/portfolio_project.png" alt="Logo Portfólio Oscar Gross" />
        <strong>
          - Projeto:
          <span> Desenvolvimento em NextJS</span>
        </strong>
        <strong>
          - Função:
          <span> Desenvolvedor</span>
        </strong>       
        <strong>
          - Tecnologias do Frontend:
          <span> React, NextJS</span>
        </strong>
        <strong>
          - Hospedagem:
          <span> Vercel</span>
        </strong>
      
        <strong><br />
          - Contexto:
          <span>
            {' '}
            Portfólio para mostra dos projetos que já desenvolvi e experiências no mercado de trabalho<br />

          </span>
        </strong>
        <strong><br />
          - Descrição técnica:
          <span>
            {' '}
            Foi executado com a estrutura que o Next oferece.
          </span>
        </strong>
        <ButtonContainer>
          <Button link="">
            <FaGithub size={25} color="#fff" />
            Código
          </Button>
          <Button link="">
            <BiWorld size={25} color="#fff" />
            Site
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
}